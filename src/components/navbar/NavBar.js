import React, { useState } from "react";
// import { GitHamburgerMenu } from "./GitHamburgerMenu";
import { NavBarData } from "./NavBarData";
import "./NavBar.css";

const NavBar = () => {

    // const [clicked, setClicked] = useState(true);

    const [navbarActive, setNavbarActive] = useState(false);

    const handleNavbarClick = () => {
        setNavbarActive(!navbarActive);
    };

    return (
        <nav>
            <a href="https://www.uic.edu/">
                <img id="logo" src="/assets/uiclogo.png" alt="UIC Logo" />
            </a>

            <div>
                {/* <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}> */}
                <ul
                    id="navbar"
                    className={navbarActive ? "active" : ""}
                    onClick={handleNavbarClick}
                >
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.path} className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* If bar is clicked, show the navbar and the close icon */}
            {/* <div id="mobile" onClick={() => setClicked(!clicked)}>
                <i id="bar" className={clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
            </div> */}

            <div id="mobile" onClick={handleNavbarClick}>
                <i
                    id="bar"
                    className={navbarActive ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </div>
        </nav>
    );
}

export default NavBar;