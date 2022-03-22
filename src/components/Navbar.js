import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
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
                <Link to="/logUp">LogUp</Link>
            </li>
        </div>
    )
}

export default Navbar;