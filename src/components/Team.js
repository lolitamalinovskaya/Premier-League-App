import React, {useState} from 'react';
import {Link} from "react-router-dom";

import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';

import '../pages/Teams.scss';

const Team = ({team, onClick, id}) => {
    const [heart, setHeart] = useState(false);
    const toggleHeart = () => setHeart(!heart);

    return (
        <figure>
            <img className="logo" src={team.logo} alt="Logo"/>
            <img src={heart ? RedHeart : WhiteHeart}
                 style={{width: '24px', height: '24px', position: "absolute", top: "1rem", right: "1rem"}}
                 onClick={() => {
                     toggleHeart();
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
