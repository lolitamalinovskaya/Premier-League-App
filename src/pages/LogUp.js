import React from 'react';
import {Link} from "react-router-dom";
import './LogIn.scss';

const LogUp = () => {
    return (
        <section className="log-up">
            <h2>LogUp</h2>
            <div className="log-up-inner">
                <input type="text" placeholder="Name *"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>LogUp</button>
                <p>Already have an account ? <Link to={'/logIn'}> Log in </Link></p>
            </div>
        </section>
    )
}

export default LogUp;