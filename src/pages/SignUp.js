import React from 'react';
import {Link} from "react-router-dom";
import './LogIn.scss';

const SignUp = () => {
    return (
        <section className="log-up">
            <h2>SignUp</h2>
            <div className="log-up-inner">
                <input type="text" placeholder="Name *"/>
                <input type="text" placeholder="Email *"/>
                <input type="password" placeholder="Password"/>
                <button>SignUp</button>
                <p>Already have an account ? <Link to={'/logIn'}> Log in </Link></p>
            </div>
        </section>
    )
}

export default SignUp;