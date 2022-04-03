import React, {useState} from "react";
import {Link} from "react-router-dom";

import Logo from '../icons/logo.svg';

import './Navbar.scss';

const Navbar = ({state, dispatch}) => {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showFavorite, setShowFavorite] = useState(false);

    const toggleNavBar = () => setShowNavBar(!showNavBar);
    const toggleFavorite = () => setShowFavorite(!showFavorite);
    const hideFavorite = () => setShowFavorite(false);

    const navClassName = showNavBar ? "navbar-show" : "navbar-hide";
    const favoriteClassName = showFavorite ? "navbar-favorite-show" : "navbar-favorite-hide";

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
            <li className={navClassName}>
                {
                    !state.userId?.id ? <Link to="/logIn">LogIn</Link> :
                        <>
                            <span onClick={toggleFavorite}>{state.userId?.name}</span>
                            <div className={favoriteClassName}>
                                <Link to="/user-favorite-teams">Favorite</Link>
                                <Link to="favorites/results">Results</Link>
                                <Link to="favorites/fixtures">Fixtures</Link>
                            </div>
                        </>
                }
            </li>
            <li onClick={toggleNavBar} className={navClassName}>
                {!state.userId?.id ? <Link to="/signUp">SignUp</Link> :
                    <span onClick={() => {
                        hideFavorite();
                        dispatch({type: "LOG_OUT"})
                    }}>logOut</span>}
            </li>
        </div>
    )
}

export default Navbar;