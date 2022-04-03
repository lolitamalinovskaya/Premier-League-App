import React, {useEffect} from 'react';
import {Progress} from "../components/Progress";
import "./Matches.scss";
import {Link} from "react-router-dom";
import parseDate from "../components/parseDate";

const FavoriteTeamsResults = ({state, dispatch}) => {
    useEffect(() => {
        if (state.favoriteTeamsFixtures !== null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/matches/fixtures', {
            headers: {"Authorization": `Bearer ${state.accessToken}`, "Accept": "application/json"}
        })
            .then((res) => res.json())
            .then((res) => dispatch({type: "FAVORITE_TEAMS_FIXTURES", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    }, [])

    return (
        <section className="matches">
            <h2>Favorite Teams Fixtures</h2>
            {!state.isLoaded || state.favoriteTeamsFixtures === null ? <Progress /> :
                <div>
                    <div className="matches-wrapper">
                        {state.favoriteTeamsFixtures && state.favoriteTeamsFixtures.map((fixture) =>
                           <Link key={fixture.id} to={`/matches/${fixture.id}`} style={{textDecoration: 'none', color: 'unset', margin: 'unset'}}>
                               <div className="matches-card" id={fixture.id}>
                                <figure>
                                    <img src={fixture.home_team.logo} alt="Logo" className="matches-logo"/>
                                    <figcaption>{fixture.home_team.name}</figcaption>
                                </figure>
                                <div className="matches-count">{fixture.stats?.goals_home_team}</div>
                                <div className="matches-inner">
                                    <p className="matches-stadium">{fixture.stadium}</p>
                                    <div className="matches-date">{parseDate(fixture.date)}</div>
                                </div>
                                <div className="matches-count">{fixture.stats?.goals_away_team}</div>
                                <figure>
                                    <img src={fixture.away_team.logo} alt="Logo" className="matches-logo"/>
                                    <figcaption>{fixture.away_team.name}</figcaption>
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