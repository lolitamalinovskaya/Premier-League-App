import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Teams.scss';
import Team from "../components/Team";

const Teams = ({state, dispatch}) => {

    useEffect(() => {
         if (state.teams !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams')
            .then((res) => res.json())
            .then((res) => dispatch({type: "TEAMS", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    },[]);

    return (
        <section>
            <h2>Teams</h2>
            <div className={"teams"}>
                {state.isLoaded ?
                    state.teams && state.teams.map((team) => <Team team={team} key={team.id} />
                    ) : <Progress/>
                }
            </div>
        </section>
    )
}

export default Teams;