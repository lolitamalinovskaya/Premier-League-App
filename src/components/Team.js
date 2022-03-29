import React, {useEffect, useState} from 'react';
import '../pages/Teams.scss';
import WhiteHeart from '../icons/whiteheart.svg';
import RedHeart from '../icons/redheart.svg';

const Team = ({state, dispatch, team}) => {

    return (
    <figure style={{position: "relative"}}>
        <img style={{width: "10rem", height: "10rem"}} src={team.logo} alt="Logo"/>
        <img src={state?.isFavorite ? RedHeart : WhiteHeart}
             style={{width: '24px', height: '24px', position: "absolute", top: "0.8rem", right: "0.8rem"}}
            // onClick={toggleLike}
             alt="Like"
        />
        <figcaption>{team.name}</figcaption>
    </figure>
    )
}

export default Team;
