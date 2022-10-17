import styles from "../styles/Card.module.css";
import CardElements from "./CardElements";

const CardView = ({ data }) => {
    return data.map((prof) => (
        <div className={styles.mainDiv} key={prof.id}>
            <h2>
                {prof.name} {prof.surname}
            </h2>
            <CardElements prof={prof} />
        </div>
    ));
};

export default CardView;
