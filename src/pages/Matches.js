import React, {useEffect} from 'react';
import {Progress} from "../components/Progress";
import "./Matches.scss";
import Pagination from "../components/Pagination";
import {Link} from "react-router-dom";
import parseDate from "../components/parseDate";

const Matches = ({state, dispatch}) => {
    useEffect(() => {
        if (state.matches !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/matches')
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [])

    const loadFirstPage = () => {
        fetch(`${state.matchesLinks?.first}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadNextPage = () => {
        fetch(`${state.matchesLinks?.next}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadPrevPage = () => {
        fetch(`${state.matchesLinks?.prev}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    const loadLastPage = () => {
        fetch(`${state.matchesLinks?.last}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "MATCHES", payload: res.data, next: res.links}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
        window.scrollTo(0,0);
    }

    return (
        <section className="matches">
            <h2>Matches</h2>
            {!state.isLoaded || state.matches === null ? <Progress /> :
                <div>
                    <div className="matches-wrapper">
                        {state.matches && state.matches.map((match) =>
                           <Link key={match.id} to={`/matches/${match.id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
                               <div className="matches-card" id={match.id}>
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
                           </Link>
                        )}
                    </div>
                    <Pagination
                        loadFirstPage={loadFirstPage}
                        loadNextPage={loadNextPage}
                        loadPrevPage={loadPrevPage}
                        loadLastPage={loadLastPage}
                        statePrev={state.matchesLinks?.prev}
                        stateNext={state.matchesLinks?.next}/>
                </div>}
        </section>
    )
}

export default Matches;