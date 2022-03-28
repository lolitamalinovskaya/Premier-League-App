import React from 'react';
import './LogIn.scss';
import {Link} from "react-router-dom";

const LogIn = () => {
    return (
        <section className="log-in">
            <h2>LogIn</h2>
            <div className="log-in-inner">
                <button>Login with Google</button>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <p>Don’t have an account ? <Link to={'/signUp'}> Register </Link></p>
            </div>
        </section>
    )
}

export default LogIn;