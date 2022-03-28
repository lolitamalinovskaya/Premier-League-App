import React, {useEffect} from 'react';
import './Players.scss';
import {Progress} from "../components/Progress";

const Players = ({state, dispatch}) => {
    useEffect(() => {
        if (state.players !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/players')/*api have pagination*/
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [dispatch, state]);

    return (
        <section>
            <h2>Players</h2>
            {state.isLoaded ?
                <table className="players">
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                    </tr>
                    {state.players && state.players.map((el) => <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name} {el.surname}</td>
                        <td>{el.team.name}</td>
                        <td>{el.position.name} </td>
                    </tr>)}
                    </tbody>
                </table> : <Progress/>
            }
        </section>
    )
}

export default Players;