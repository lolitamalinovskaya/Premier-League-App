import React, {useEffect, useState} from 'react';
import '../pages/Teams.scss';
import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';
import {Link} from "react-router-dom";

const Team = ({state, dispatch, team, id}) => {

    return (
        <Link key={team.id} to={`/teams/${id}`} target="_blank"
              style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
            <figure style={{position: "relative"}}>
                <img style={{width: "10rem", height: "10rem"}} src={team.logo} alt="Logo"/>
                <img src={state?.isFavorite ? RedHeart : WhiteHeart}
                     style={{width: '24px', height: '24px', position: "absolute", top: "0.8rem", right: "0.8rem"}}
                    // onClick={toggleLike}
                     alt="Like"
                />
                <figcaption>{team.name}</figcaption>
            </figure>
        </Link>
    )
}

export default Team;
