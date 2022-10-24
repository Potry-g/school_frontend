import styles from "../styles/ArrowBut.module.scss";
import Link from "next/link";

const SchoolButton = ({ param }) => {
    const idG = Number(param) + 1;
    const idS = Number(param) - 1;
    return (
        <>
            <div style={{ display: "inline-flex" }}>
                {idS >= 1 ? (
                    <Link href={`/dashboard/${idS}`}>
                        <div
                            className={styles.arrowLeft}
                            style={{ cursor: "pointer" }}
                        ></div>
                    </Link>
                ) : (
                    <div
                        className={styles.arrowLeft}
                        style={{ borderRight: "30px solid grey" }}
                    ></div>
                )}
                <div className={styles.cool}>
                    {idS >= 1 ? <h3>{idS}</h3> : <></>}
                    <h2 style={{ marginLeft: "40px", marginRight: "40px" }}>
                        School
                    </h2>
                    {idG <= 4 ? <h3>{idG}</h3> : <></>}
                </div>
                {idG <= 4 ? (
                    <Link href={`/dashboard/${idG}`}>
                        <div
                            className={styles.arrowRight}
                            style={{ cursor: "pointer" }}
                        ></div>
                    </Link>
                ) : (
                    <div
                        className={styles.arrowRight}
                        style={{ borderLeft: "30px solid grey" }}
                    ></div>
                )}
            </div>
        </>
    );
};

export default SchoolButton;
