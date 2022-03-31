import React, {useEffect} from 'react';
import './MatchInfo.scss';
import {useParams} from "react-router-dom";
import {Progress} from "./Progress";
import parseDate from "./parseDate";

const MatchInfo = ({state, dispatch}) => {
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://polar-shelf-59117.herokuapp.com/api/v1/matches/${id}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCH_INFO", payload: res.data}))
            .then((e) => dispatch({type: "ERROR", payload: e}))
    }, [])

    const showNamePlayer = id => {
        const playersAwayTeam = state.matchInfo?.away_team.players;
        const playersHomeTeam = state.matchInfo?.home_team.players;
        const arrayAllPlayers = playersAwayTeam?.concat(playersHomeTeam);
        const objPlayers = arrayAllPlayers?.find((el) => id === el.id);

        return `${objPlayers?.name || ''} ${objPlayers?.surname || ''}`;
    }

    return (
        <section className="info">
            {!state.isLoaded ? <Progress/> :

                <div className="info_wrapper">
                    <div className="info_header">
                        <figure className="info_inner">
                            <img src={state.matchInfo?.home_team.logo} alt="Logo" className="info_logo"/>
                            <figcaption className="info_name">{state.matchInfo?.home_team.name}</figcaption>
                        </figure>
                        <span className="info_goal">{state.matchInfo?.stats?.goals_home_team}</span>
                        <div style={{display: 'flex', flexDirection: "column"}}>
                            <span
                                className="info_city">{state.matchInfo.stadium?.name},<br/>{state.matchInfo.stadium?.city}</span>
                            <span className="info_vs">VS</span>
                        </div>

                        <span className="info_goal">{state.matchInfo?.stats?.goals_away_team}</span>
                        <figure className="info_inner">
                            <img src={state.matchInfo?.away_team.logo} alt="Logo" className="info_logo"/>
                            <figcaption className="info_name">{state.matchInfo?.away_team.name}</figcaption>
                        </figure>
                    </div>
                    <p className="info_time">{state.matchInfo.is_finished ? 'MATCH FINISHED!' : parseDate(state.matchInfo.date)}</p>
                    {state.matchInfo.is_finished ?
                        <>
                            <p className={'info_events'}>EVENTS</p>
                            {state.matchInfo?.game_events && state.matchInfo?.game_events.map((event) =>
                                <div key={event.id}>
                                    <p>
                                        <span>{event?.event_type.description}</span><span> at {event?.minute} minutes</span> <span>{showNamePlayer(event?.player_id)}!</span></p>
                                </div>
                            )}
                        </>
                        : null}
                </div>
            }
        </section>
    )
}

export default MatchInfo;