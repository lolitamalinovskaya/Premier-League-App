import React, {useEffect} from 'react';
import {Progress} from "../components/Progress";
import './Table.scss';

const Table = ({state, dispatch}) => {
    useEffect(() => {
        if (state.table !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams/table')
            .then((res) => res.json())
            .then((res) => dispatch({type: "TABLE", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [])

    return (
        <section>
            <h2>Table</h2>
            {state.isLoaded ?
                <table className="table">
                    <tbody>
                    <tr>
                        <th>TEAM</th>
                        <th>M</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>G+</th>
                        <th>G-</th>
                        <th>PTS</th>
                    </tr>
                    {state.table && state.table.map((count) =>
                        <tr key={count.id}>
                            <td>
                                <figure className="table-inner">
                                    <img src={count.logo} alt="Logo" />
                                    <figcaption>{count.name}</figcaption>
                                </figure>
                            </td>
                            <td>{count.stats?.matches}</td>
                            <td>{count.stats?.wins}</td>
                            <td>{count.stats?.draws}</td>
                            <td>{count.stats?.loses}</td>
                            <td>{count.stats?.goalsScored}</td>
                            <td>{count.stats?.goalsConceded}</td>
                            <td><b>{count.stats?.points}</b></td>
                        </tr>
                    )}
                    </tbody>
                </table> : <Progress/>}
        </section>
    )
}

export default Table;