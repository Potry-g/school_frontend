import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Main() {
    return;
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );
    if (session) {
        return {
            redirect: {
                destination: "/table",
            },
        };
    }
    if (!session) {
        return {
            redirect: {
                destination: "/login",
            },
        };
    }
}
