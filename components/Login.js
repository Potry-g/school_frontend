import { signIn } from "next-auth/react";
import logStyles from "../styles/Log.module.css";
import buttStyle from "../styles/Button.module.css";
const Login = () => {
    return (
        <div className={logStyles.login}>
            <div className={logStyles.inner}>
                <button
                    onClick={() =>
                        signIn("google", { callbackUrl: "/dashboard/1" })
                    }
                    className={buttStyle.buttonIn}
                >
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
