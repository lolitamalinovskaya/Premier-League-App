import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import './Teams.scss';
import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';

const Teams = ({state, dispatch}) => {
    const [heart, setHeart] = useState(false);

    useEffect(() => {
         if (state.teams !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/teams')
            .then((res) => res.json())
            .then((res) => dispatch({type: "TEAMS", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    },[]);

     const toggleHeart = () => {
         dispatch({type: "FAVORITE_TEAM"})
     };

    return (
        <section>
            <h2>Teams</h2>
            <div className={"teams"}>
                {state.isLoaded ?
                    state.teams && state.teams.map((team) => <figure key={team.id} style={{position: "relative"}}
                                                                     >
                            <img style={{width: "10rem", height: "10rem"}} src={team.logo} alt="Logo"/>
                            <img src={heart ? RedHeart : WhiteHeart}
                                 style={{width: '24px', height: '24px', position: "absolute", top: "0.8rem", right: "0.8rem"}}
                                 onClick={toggleHeart}
                                 alt="Like"
                            />
                            <figcaption>{team.name}</figcaption>
                        </figure>
                    ) : <Progress/>
                }
            </div>
        </section>
    )
}

export default Teams;