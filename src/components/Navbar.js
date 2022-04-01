import React, {useState} from "react";
import {Link} from "react-router-dom";

import Logo from '../icons/logo.svg';

import './Navbar.scss';

const Navbar = ({state, dispatch}) => {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showFavorite, setShowFavorite] = useState(false);

    const toggleNavBar = () => setShowNavBar(!showNavBar);
    const toggleFavorite = () => setShowFavorite(!showFavorite);

    const navClassName = showNavBar ? "navbar-show" : "navbar-hide";

    return (
        <div className="navbar">
            <li onClick={toggleNavBar}>
                <img className="navbar-logo" src={Logo} alt="Логотип"/>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                <Link to="/players">Players</Link>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                <Link to="/teams">Teams</Link>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                <Link to="/matches">Matches</Link>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                <Link to="/table">Table</Link>
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                {!state.userId?.id ? <Link to="/logIn">LogIn</Link> :
                    <span onClick={toggleFavorite}>{state.userId?.name}</span>}
                {state.userId?.id ? <Link style={{marginLeft: "4rem"}} to="/user-favorite-teams">Favorite</Link> : null}
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                {!state.userId?.id ? <Link to="/signUp">SignUp</Link> :
                    <span onClick={() => dispatch({type: "LOG_OUT"})}>logOut</span>}
            </li>
        </div>
    )
}

export default Navbar;