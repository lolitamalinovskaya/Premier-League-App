import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';
import Logo from '../icons/logo.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <li>
                <img className="logo" src={Logo} alt="Логотип"/>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/players">Players</Link>
            </li>
            <li>
                <Link to="/teams">Teams</Link>
            </li>
            <li>
                <Link to="/matches">Matches</Link>
            </li>
            <li>
                <Link to="/table">Table</Link>
            </li>
            <li>
                <Link to="/logIn">LogIn</Link>
            </li>
            <li>
                <Link to="/signUp">SignUp</Link>
            </li>
        </div>
    )
}

export default Navbar;