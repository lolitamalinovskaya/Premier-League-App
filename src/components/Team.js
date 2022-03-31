import React, {useEffect, useState} from 'react';
import '../pages/Teams.scss';
import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';
import {Link} from "react-router-dom";

const Team = ({team, id, onClick}) => {

    const [state, setState] = useState(false);

    return (
            <figure>
                <img style={{width: "10rem", height: "10rem"}} src={team.logo} alt="Logo"/>
                <img src={state ? RedHeart : WhiteHeart}
                     style={{width: '24px', height: '24px', position: "absolute", top: "0.8rem", right: "0.8rem"}}
                     onClick={() => {
                         setState(!state);
                         onClick(team.id);
                     }}
                     alt="Like"
                />
                <Link key={team.id} to={`/teams/${id}`} className="link">
                <figcaption>{team.name}</figcaption>
                </Link>
            </figure>
    )
}

export default Team;
