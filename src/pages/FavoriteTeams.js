import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Teams.scss';
import Team from "../components/Team";

const FavoriteTeams = ({state, dispatch}) => {

    useEffect(() => {
        if (state.teams === null || state.teams.length === 0) {
            fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams')
                .then((res) => res.json())
                .then((res) => dispatch({type: "TEAMS", payload: res.data}))
                .catch((e) => dispatch({type: "ERROR", payload: e}))
        } else {
            fetch(`https://polar-shelf-59117.herokuapp.com/api/v1/user-favorite-teams`, {
                headers: {"Authorization": `Bearer ${state.accessToken}`, "Accept": "application/json"}
            })
                .then((res) => res.json())
                .then((res) => dispatch({type: "FAVORITE_TEAMS", payload: res.data
                        .filter(e => e.user_id === state.userId.id)
                        .map(e => state.teams.find(x => x.id === e.team_id))}))
                .catch((e) => dispatch({type: "ERROR", payload: e}))
        }
    },[state.teams]);

    return (
        <section>
            <h2>Favorite Teams</h2>
            <div className={"favorite-teams"}>
                {!state.isLoaded ? <Progress/> :
                    state.favoriteTeams && state.favoriteTeams.map((team) => <Team team={team} key={team.id} id={team.id}/>)}
            </div>
        </section>
    )
}

export default FavoriteTeams;