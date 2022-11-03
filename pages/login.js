import { unstable_getServerSession } from "next-auth";
import Login from "../components/Login";
import { authOptions } from "./api/auth/[...nextauth]";

const login = () => {
    return <Login />;
};
export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );
    if (session) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}

export default login;
