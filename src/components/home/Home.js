import React from "react";
import './Home.css';
import Earth from "./Earth";
import NewsFeed from "./NewsFeed";

const Home = () => {
    return (
        <div id="home" className="container d-flex align-items-center justify-content-center min-vh-100">
            <div id='row' className="row w-100 text-center">
                <div className='col d-flex flex-column align-items-start justify-content-center'>
                    <div id='leftside' className="text-left"> {/* Aligning text to the left */}
                        {/* <Earth /> */}
                        <h1 className="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory<br />(BEI Lab)</h1>
                        <p className="animate__animated animate__fadeInUpBig animate__delay-1s">
                            BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.
                        </p>
                    </div>
                </div>

                <div className='col d-flex flex-column align-items-center justify-content-center'>
                    <div id='rightside' className="text-center">
                        <NewsFeed/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
