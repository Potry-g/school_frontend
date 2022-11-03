import { unstable_getServerSession } from "next-auth";
import Logout from "../../components/Logout";
import SchoolCard from "../../components/SchoolCard";
import { authOptions } from "../api/auth/[...nextauth]";

const index = ({ data }) => {
    return (
        <div>
            <div>
                <Logout />
            </div>
            <div style={{ display: "flex" }}>
                {data.map((school) => (
                    <SchoolCard school={school} key={school.id} />
                ))}
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );
    if (session) {
        const response = await fetch("http://localhost:3001/school");
        const data = await response.json();
        return { props: { data: data } };
    } else {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
}

export default index;
