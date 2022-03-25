import React, {useEffect, useState} from 'react';
import {Progress} from "../components/Progress";
import "./Matches.scss";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/matches')
            .then((res) => res.json())
            .then((res) => {
                setIsLoaded(true);
                setMatches(res.data);
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <section className="matches">
            <h2>Matches</h2>
            {isLoaded ?
                matches && matches.map((match) => <div className="matches-card" key={match.id}>
                        <figure>
                            <img src={match.home_team.logo} alt="Logo" className="matches-logo"/>
                            <figcaption>{match.home_team.name}</figcaption>
                        </figure>
                        <div className="matches-count">{match.stats?.goals_home_team}</div>
                        <div className="matches-inner">
                            <p>{match.stadium}</p>
                            <div>{match.date}</div>
                            {/*распарсить дату*/}
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