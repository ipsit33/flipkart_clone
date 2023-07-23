import React from "react";
import '../css/style.css';
import '../css/utils.css';
import '../css/responsive.css';
import logo from './logo.png';

function Navbar(){
    return(
        <div style={{position: "fixed", zIndex: 10, width: "100%", top: 0 }}>
        <header>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="search">
                <input type="text" name="" id="" placeholder="Search Here" />
                <button className="btn">Search</button>
            </div>
        </nav>
    </header>
        </div>
    );
}

export default Navbar;