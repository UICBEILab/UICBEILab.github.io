import React from "react";
import './Home.css';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import Earth from "./Earth";

const Home = () => {
    const AnimationStyle1 = {
        width: '100%',
        height: '0',
        paddingbottom: '100%',
        position: 'relative'
    }

    const AnimationStyle2 = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        frameBorder: '0',
    }

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
                        <h1 class="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory<br/>(BEI Lab)</h1>
                        <p class="animate__animated animate__fadeInUpBig animate__delay-1s">BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;