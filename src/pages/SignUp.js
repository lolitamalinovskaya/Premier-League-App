import React, {useRef, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import './LogIn.scss';

const SignUp = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const [signUp, setSignUp] = useState(false);
    const [error, setError] = useState(undefined);

    const onClick = () => {
        fetch('https://polar-shelf-59117.herokuapp.com/api/v1/auth/register',{
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json, text/plain, */*"},
            body: JSON.stringify({
                "name": name.current.value,
                "email": email.current.value,
                "password": password.current.value,
            })
        }).then(async (res) => {
                if (res.status === 201) {
                    setSignUp(true)
                } else {
                    const json = await res.json()
                    setError(Object.entries(json.errors).map(([k, v]) => v).reduce((a, b) => `${a}, ${b}`))
                }
            })
            .catch((e) => console.log(e.message))
    }

    if (signUp) {
        return <Navigate to={'/login'} />
    }

    return (
        <section className="log-up">
            <h2>SignUp</h2>
            <div className="log-up-inner">
                {error ? <b style={{textTransform: "uppercase", color: '#4db8e1', margin: "0 1rem"}}>{error.toString()}</b> : null}
                <input ref={name} type="text" placeholder="Name *"/>
                <input ref={email} type="text" placeholder="Email *"/>
                <input ref={password} type="password" placeholder="Password"/>
                <button onClick={onClick}>SignUp</button>
                <p>Already have an account ? <Link to={'/logIn'}> Log in </Link></p>
            </div>
        </section>
    )
}

export default SignUp;