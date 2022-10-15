import style from "../styles/Table.module.css";

const TableView = ({ data }) => {
    return (
        <table className={style.flTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Knowledge</th>
                    <th>Empathy</th>
                    <th>Strictness</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {data.map((prof) => (
                    <tr key={prof.id}>
                        <td>
                            {prof.name} {prof.surname}
                        </td>
                        <td>{prof.gender}</td>
                        <td>{prof.knowledge}</td>
                        <td>{prof.empathy}</td>
                        <td>{prof.strictness}</td>
                        <td>{prof.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableView;
