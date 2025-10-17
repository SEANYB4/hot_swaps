import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "../styles/NavBar.css";

const NavBar = () => {

    return (

        <nav>
            <img className="logo" src="/Images/logo1.png" alt="logo"/>
            <ul className="navBtns">
                <li className="navBtn"><Link to="/">Home</Link></li>
                <li className="navBtn"><Link to="/products">Products</Link></li>
                <li className="navBtn"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )

}

export default NavBar;