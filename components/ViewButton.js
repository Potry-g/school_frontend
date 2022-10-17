import style from "../styles/Button.module.css";

const ViewButton = ({ text }) => {
    return <button className={style.buttonOut}>{text}</button>;
};

export default ViewButton;
