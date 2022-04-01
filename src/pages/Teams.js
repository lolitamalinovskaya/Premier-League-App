import React, {useEffect} from 'react';

import {Progress} from "../components/Progress";
import Team from "../components/Team";

import './Teams.scss';

const Teams = ({state, dispatch}) => {

    useEffect(() => {
        if (state.teams !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams')
            .then((res) => res.json())
            .then((res) => dispatch({type: "TEAMS", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, []);

    const onClick = (teamId) => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/user-favorite-teams', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${state.accessToken}`,
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*"
            },
            body: JSON.stringify({
                "user_id": state.userId?.id,
                "team_id": teamId,
            })
        })
            .then((res) => res.json())
            .then((res) => res.data)
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }

    return (
        <section>
            <h2>Teams</h2>
            <div className={"teams"}>
                {!state.isLoaded ? <Progress/> :
                    state.teams && state.teams.map((team) => <Team onClick={onClick} team={team} key={team.id}
                                                                   id={team.id}/>)}
            </div>
        </section>
    )
}

export default Teams;