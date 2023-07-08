import React from "react";
import './Home.css';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import Earth from "./Earth";
import NavBar from "../navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Research from "../research/Research";
import Team from "../Team";
import Publications from "../publications/Publications";
import News from "../News";
import Courses from "../Courses";
import Contact from "../Contact";

const Home = () => {
    return (
        <div id="home">
            <div id='row'>

                <div className='col'>
                    <div id='leftside'>
                        <Earth />
                    </div>
                </div>

                <div className='col'>
                    <div id='rightside'>
                        <h1 className="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory<br/>(BEI Lab)</h1>
                        <p className="animate__animated animate__fadeInUpBig animate__delay-1s">BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;