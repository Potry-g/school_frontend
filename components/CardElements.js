import style from "../styles/Card.module.css";

const CardElements = ({ prof }) => {
    return (
        <>
            <div>
                <h3>Gender: {prof.gender}</h3>
            </div>
            <div>
                <div className={style.childDiv}>
                    <p>Knowledge</p>
                    <p>{prof.knowledge}</p>
                </div>
                <div className={style.childDiv}>
                    <p>Empathy</p>
                    <p>{prof.empathy}</p>
                </div>
                <div className={style.childDiv}>
                    <p>Strictness</p>
                    <p>{prof.strictness}</p>
                </div>
            </div>
            <div>
                <h3>Rating: {prof.rating}</h3>
            </div>
        </>
    );
};

export default CardElements;
