import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Teams.scss';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams')
            .then((res) => res.json())
            .then((res) => {
                setIsLoaded(true);
                setTeams(res.data);
            })
            .catch((e) => console.log(e))
    }, []);

    return (
        <>
            <h2>Teams</h2>
            <div className={"teams"}>
                {isLoaded ?
                    teams && teams.map((team) => <figure key={team.id}>
                        <img style={{width: "10rem", height: "10rem"}} src={team.logo}/>
                        <figcaption>{team.name}</figcaption></figure>
                    ) : <Progress/>
                }
            </div>
        </>
    )
}

export default Teams;