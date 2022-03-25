import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Table.scss';

const Table = () => {
    const [table, setTable] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams/table')
            .then((res) => res.json())
            .then((res) => {
                setIsLoaded(true);
                setTable(res.data);
            })
    }, [])

    return (
        <section>
            <h2>Table</h2>
            {isLoaded ?
                <table className="table">
                    <tr>
                        <th>Team</th>
                        <th>Games</th>
                        <th>Points</th>
                        <th>Wins</th>
                        <th>Loses</th>
                        <th>Draws</th>
                        <th>Scored</th>
                        <th>Conceded</th>
                    </tr>
                    {table && table.map((count) =>
                        <tr key={count.id}>
                            <td>
                                <figure className="table-inner">
                                    <img src={count.logo} alt="Logo" />
                                    <figcaption>{count.name}</figcaption>
                                </figure>
                            </td>
                            <td>{count.stats?.matches}</td>
                            <td>{count.stats?.points}</td>
                            <td>{count.stats?.wins}</td>
                            <td>{count.stats?.loses}</td>
                            <td>{count.stats?.draws}</td>
                            <td>{count.stats?.goalsScored}</td>
                            <td>{count.stats?.goalsConceded}</td>
                        </tr>
                    )}
                </table> : <Progress/>}
        </section>
    )
}

export default Table;