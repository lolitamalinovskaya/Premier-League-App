import React, {useEffect} from 'react';
import {Progress} from "../components/Progress";
import "./Matches.scss";
import {Link} from "react-router-dom";
import parseDate from "../components/parseDate";

const FavoriteTeamsResults = ({state, dispatch}) => {
    useEffect(() => {
        if (state.favoriteTeamsResults !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/matches/results', {
            headers: {"Authorization": `Bearer ${state.accessToken}`, "Accept": "application/json"}
        })
            .then((res) => res.json())
            .then((res) => dispatch({type: "FAVORITE_TEAMS_RESULTS", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [])

    return (
        <section className="matches">
            <h2>Favorite Teams Results</h2>
            {!state.isLoaded || state.favoriteTeamsResults === null ? <Progress /> :
                <div>
                    <div className="matches-wrapper">
                        {state.favoriteTeamsResults && state.favoriteTeamsResults.map((result) =>
                           <Link key={result.id} to={`/matches/${result.id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
                               <div className="matches-card" id={result.id}>
                                <figure>
                                    <img src={result.home_team.logo} alt="Logo" className="matches-logo"/>
                                    <figcaption>{result.home_team.name}</figcaption>
                                </figure>
                                <div className="matches-count">{result.stats?.goals_home_team}</div>
                                <div className="matches-inner">
                                    <p className="matches-stadium">{result.stadium}</p>
                                    <div className="matches-date">{parseDate(result.date)}</div>
                                </div>
                                <div className="matches-count">{result.stats?.goals_away_team}</div>
                                <figure>
                                    <img src={result.away_team.logo} alt="Logo" className="matches-logo"/>
                                    <figcaption>{result.away_team.name}</figcaption>
                                </figure>
                            </div>
                           </Link>
                        )}
                    </div>
                </div>}
        </section>
    )
}

export default FavoriteTeamsResults;