import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';
import Logo from '../icons/logo.svg';

const Navbar = () => {
    const [showNavBar, setHhowNavBar] = useState(false);

    const toggleNavBar = () => setHhowNavBar(!showNavBar);

    return (
        <div className="navbar">
            <li onClick={toggleNavBar}>
                <img className="navbar-logo" src={Logo} alt="Логотип"/>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/players">Players</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/teams">Teams</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/matches">Matches</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/table">Table</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/logIn">LogIn</Link>
            </li>
            <li onClick={toggleNavBar} className={showNavBar ? "navbar-show" : "navbar-hide"}>
                <Link to="/signUp">SignUp</Link>
            </li>
        </div>
    )
}

export default Navbar;