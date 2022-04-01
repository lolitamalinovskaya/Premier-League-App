import React, {useEffect} from 'react';
import './Squads.scss';
import {Progress} from "./Progress";
import {useParams} from "react-router-dom";

const Squads = ({state, dispatch}) => {
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://polar-shelf-59117.herokuapp.com/api/v1/teams/${id}`)
            .then((res) => res.json())
            .then((res) => dispatch({type: "SQUAD", payload: res.data}))
            .catch((e) => dispatch({type: "ERROR", payload: e}))
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <section className="squad">
            {!state.isLoaded ? <Progress/> :
                <div>
                    <h2>{state.squad?.name} Squad</h2>
                    <img className="squad-logo" src={state.squad?.logo} alt="logo"/>
                    <p><b>manager: {state.squad?.manager}</b></p>
                    <div className="squad-inner">
                        {state.squad?.players && state.squad?.players.map((el) =>
                            <div key={el.id} className="squad-name"><span>{el.name} {el.surname}</span><span style={{color: "lightgray", paddingTop: '0.5rem'}}>{el.position?.name}</span> </div>
                        )}
                    </div>
                </div>
            }
        </section>
    )
}

export default Squads;