import Logout from "./Logout";
import TableView from "./TableView";
import styles from "../styles/Table.module.css";
import btnStyle from "../styles/Button.module.css";
import CardView from "./CardView";
import { useState } from "react";
import SchoolButton from "./SchoolButton";

const DashBoard = ({ data, param }) => {
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
            <div style={{ textAlign: "center" }}>
                <SchoolButton param={param} />
            </div>
        </>
    );
};

export default DashBoard;
