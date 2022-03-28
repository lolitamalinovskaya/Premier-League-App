import React, {useEffect} from 'react';
import {Progress} from "../components/Progress";
import "./Matches.scss";

const Matches = ({state, dispatch}) => {
    useEffect(() => {
        if (state.matches !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/matches')
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [])


    const parseDate = string => {
        let fullDate  = new Date(string);
        let month = fullDate.toLocaleString('default', { month: "short" });
        let year = fullDate.getFullYear();
        let time = `${fullDate.getHours()}:${fullDate.getMinutes()}`;
        let date = `${fullDate.getDate()} ${month} ${year}`;

        return (
            <strong>
                {time} <br/> {date}
            </strong>
        );
    }

    return (
        <section className="matches">
            <h2>Matches</h2>
            {state.isLoaded ?
                state.matches && state.matches.map((match) => <div className="matches-card" key={match.id}>
                        <figure>
                            <img src={match.home_team.logo} alt="Logo" className="matches-logo"/>
                            <figcaption>{match.home_team.name}</figcaption>
                        </figure>
                        <div className="matches-count">{match.stats?.goals_home_team}</div>
                        <div className="matches-inner">
                            <p className="matches-stadium">{match.stadium}</p>
                            <div className="matches-date">{parseDate(match.date)}</div>
                        </div>
                        <div className="matches-count">{match.stats?.goals_away_team}</div>
                        <figure>
                            <img src={match.away_team.logo} alt="Logo" className="matches-logo"/>
                            <figcaption>{match.away_team.name}</figcaption>
                        </figure>
                    </div>
                )
            : <Progress/>}
        </section>
    )
}

export default Matches;