import { signOut } from "next-auth/react";
import styles from "../styles/Button.module.css";

const Logout = () => {
    return (
        <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className={styles.buttonOut}
        >
            Sign Out
        </button>
    );
};

export default Logout;
