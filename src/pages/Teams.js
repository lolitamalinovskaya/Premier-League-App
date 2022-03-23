import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Teams.scss';
import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [heart, setHeart] = useState(false); /*этот стейт вынести к отдельной карточке, переделать*/

    const toggleHeart = () => setHeart(!heart);

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
                    teams && teams.map((team) => <figure key={team.id} style={{position: "relative"}} onClick={toggleHeart}>
                        <img style={{width: "10rem", height: "10rem"}} src={team.logo}/>
                        <img src={heart ? RedHeart : WhiteHeart}
                             style={{width: '24px', height: '24px', position: "absolute", top: "0.8rem", right: "0.8rem"}} />
                        <figcaption>{team.name}</figcaption></figure>
                    ) : <Progress/>
                }
            </div>
        </>
    )
}

export default Teams;