import Logout from "../components/Logout";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import TableView from "../components/TableView";
import styles from "../styles/Table.module.css";
import btnStyle from "../styles/Button.module.css";
import CardView from "../components/CardView";
import { useState } from "react";

const table = ({ data }) => {
    const [view, setView] = useState(true);

    return (
        <>
            <div style={{ paddingBottom: "5%" }}>
                <div className={styles.viewDiv}>
                    <button
                        className={btnStyle.buttonOut}
                        onClick={() => {
                            setView(!view);
                        }}
                    >
                        {view ? "Card View" : "Table View"}
                    </button>
                </div>
                <div className={styles.logDiv}>
                    <Logout />
                </div>
            </div>
            {view ? (
                <div className={styles.tableWrapper}>
                    <TableView data={data} />
                </div>
            ) : (
                <div>
                    <div className={styles.cardDiv}>
                        <CardView data={data} />
                    </div>
                </div>
            )}
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
