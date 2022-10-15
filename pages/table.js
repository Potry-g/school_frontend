import Logout from "../components/Logout";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import TableView from "../components/TableView";
import styles from "../styles/Table.module.css";
import ViewButton from "../components/ViewButton";

const table = ({ data }) => {
    return (
        <>
            <div style={{ paddingBottom: "5%" }}>
                <div className={styles.viewDiv}>
                    <ViewButton />
                </div>
                <div className={styles.logDiv}>
                    <Logout />
                </div>
            </div>
            <div className={styles.tableWrapper}>
                <TableView data={data} />
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );
    if (session) {
        const response = await fetch(
            "https://633efed883f50e9ba3bda98e.mockapi.io/school/1/professor"
        );
        const data = await response.json();
        return { props: { data } };
    } else {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
}

export default table;
