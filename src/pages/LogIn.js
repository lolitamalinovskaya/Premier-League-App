import React, {useEffect, useRef, useState} from 'react';
import {Link, Navigate} from "react-router-dom";

import './LogIn.scss';

const LogIn = ({state, dispatch}) => {
    const email = useRef();
    const password = useRef();

    const [error, setError] = useState(null);
    const [googleAc, setGoogleAc] = useState(null);

    const onClick = () => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "password": password.current.value,
                "email": email.current.value,
            })
        })
            .then(async (res) => {
                if (res.status === 200) {
                    const json = await res.json()
                    dispatch({type: "ACCESS_TOKEN", payload: json.access_token})
                } else {
                    const json = await res.json()
                    setError(json.error)
                }
            })
            .catch((e) => setError(e))
    }

    useEffect(() => {
        if (state.accessToken === null) return
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/auth/user', {
            headers: {"Authorization": `Bearer ${state.accessToken}`}
        })
            .then((res) => res.json())
            .then((res) => dispatch({type: "USER_ID", payload: res.data}))
            .catch((e) => setError(e.message))

    }, [state.accessToken])

    const redirectToGoogle = () => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/auth/google')
            .then((res) => res.json())
            .then((res) => setGoogleAc(res?.url))
    }

    useEffect(() => {
        if (googleAc === null) return;
        window.open(`${googleAc}`, "_blank");
    }, [googleAc])

    if (state.userId?.id) {
        return <Navigate to={'/'}/>
    }

    const handleKeyPress = e => {if (e.keyCode === 0) onClick()};

    return (
        <section className="log-in">
            <h2>LogIn</h2>
            <div className="log-in-inner">
                <button className="google-btn" onClick={redirectToGoogle}>Login with Google</button>
                {/*{error ? <b style={{textTransform: "uppercase", color: '#4db8e1', margin: "0 1rem"}}>{error}</b> : null}*/}
                <input ref={email} type="text" placeholder="Email"/>
                <input ref={password} type="password" placeholder="Password" onKeyPress={handleKeyPress} />
                <button onClick={onClick}>Login</button>
                <p>Don’t have an account ? <Link to={'/signUp'}> Register </Link></p>
            </div>
        </section>
    )
}

export default LogIn;