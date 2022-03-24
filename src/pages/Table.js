import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Table.scss';

const Table = () => {
    const [table, setTable] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);

    useEffect(() => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams/table')
            .then((res) => res.json())
            .then((res) => {
                setIsloaded(true);
                setTable(res.data);
            })
    }, [])

    return (
        <section>
            <h2>Table</h2>
            <table>
                <tr>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Points</th>
                    <th>wins</th>
                    <th>loses</th>
                    <th>draws</th>
                    <th>goalsScored</th>
                    <th>goalsConceded</th>
                </tr>
                {isLoaded ? table && table.map((count) =>
                    <tr key={count.id}>
                        <td>
                            <figure className="table-inner">
                                <img src={count.logo} alt="Logo" style={{width: '3rem', height: '5rem'}}/>
                                <figcaption>{count.name}</figcaption>
                            </figure>
                        </td>
                        <td>{count.stats?.matches}</td>
                        <td>{count.stats?.points}</td>
                        <td>{count.stats?.wins}</td>
                        <td>{count.stats?.loses}</td>
                        <td>{count.stats?.draws}</td>
                        <td>{count.stats?.goalsScored}</td>
                        {/*забито голов*/}
                        <td>{count.stats?.goalsConceded}</td>
                        {/*пропущено голов*/}
                    </tr>
                ) : <Progress/>
                } </table>
        </section>

    )
}

export default Table;