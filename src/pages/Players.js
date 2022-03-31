import React, {useEffect} from 'react';
import './Players.scss';
import {Progress} from "../components/Progress";
import Pagination from "../components/Pagination";

const Players = ({state, dispatch}) => {
    useEffect(() => {
        if (state.players !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/players')
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, []);

    const loadFirstPage = () => {
        fetch(`${state.playersLinks?.first}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadPrevPage = () => {
        fetch(`${state.playersLinks?.prev}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadNextPage = () => {
        fetch(`${state.playersLinks?.next}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadLastPage = () => {
        fetch(`${state.playersLinks?.last}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "PLAYERS", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    return (
        <section>
            <h2>Players</h2>
            {!state.isLoaded ? <Progress /> :
                <div>
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
                    </table>
                    <Pagination
                        loadFirstPage={loadFirstPage}
                        loadPrevPage={loadPrevPage}
                        loadNextPage={loadNextPage}
                        loadLastPage={loadLastPage}
                        statePrev={state.playersLinks?.prev}
                        stateNext={state.playersLinks?.next}
                    />
                </div>}
        </section>
    )
}

export default Players;