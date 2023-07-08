import React from 'react';
import {useState} from 'react';
import './NavBar.css';
import { NavBarData } from './NavBarData';
// import { Link } from 'react-scroll';
import Home from '../home/Home';
import Research from '../research/Research';
import Publications from '../publications/Publications';
import Courses from '../Courses';
import News from '../News';
import Team from '../Team';
import Contact from '../Contact';
import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {

    const [clicked, setClicked] = useState(true);

    return (
        <nav>
            {/* Insert public/assets/uiclogo.pngg here */}
            <a href="https://www.uic.edu/">
                <img id="logo" src="/assets/uiclogo.png" alt="UIC Logo"/>
            </a>
            
            <div>
                <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} smooth={true} offset={200} duration={500} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/team" element={<Team />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/news" element={<News />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}

            {/* If bar is clicked, show the navbar and the close icon */}
            <div id="mobile" onClick={() => setClicked(!clicked)}>
                {/* {isMobile ? <i className="fas fs-times"></i> : <i className="fas fs-bars"></i>} */}
                <i id="bar" className={clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
            </div>
        </nav>
    );

};

export default NavBar;