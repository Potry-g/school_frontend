import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import DashBoard from "../../components/DashBoard";
import { useRouter } from "next/router";

const dash = ({ data, param }) => {
    return (
        <>
            <DashBoard data={data} param={param} />
        </>
    );
};

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );
    const id = context.params.id;
    if (session) {
        const response = await fetch(
            `http://localhost:3001/school/${id}/professor`
        );
        const data = await response.json();
        return { props: { data: data, param: id } };
    } else {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
}

export default dash;
