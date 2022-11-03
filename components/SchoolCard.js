import Link from "next/link";

const SchoolCard = ({ school }) => {
    return (
        <Link href={`/dashboard/${school.id}`}>
            <div
                style={{
                    border: "1px solid black",
                    cursor: "pointer",
                    backgroundColor: "rgb(245, 242, 255)",
                    margin: "30px",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h2>{school.name}</h2>
                </div>
                <div>
                    <ul>
                        <li>{school.address}</li>
                        <li>{school.city}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default SchoolCard;
