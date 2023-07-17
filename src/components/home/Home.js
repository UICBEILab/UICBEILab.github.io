import React from "react";
import './Home.css';
import Earth from "./Earth";
import NewsFeed from "./NewsFeed";


const Home = () => {
    return (
        <div id="home">
            <div id='row'>

                <div className='col'>
                    <div id='leftside'>
                        {/* <Earth /> */}
                        <h1 className="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory<br />(BEI Lab)</h1>
                        <p className="animate__animated animate__fadeInUpBig animate__delay-1s">BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.</p>
                    </div>
                </div>

                <div className='col'>
                    <div id='rightside'>
                        <NewsFeed username="@BEI_Lab" />
                        {/* <h1 className="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory<br/>(BEI Lab)</h1>
                        <p className="animate__animated animate__fadeInUpBig animate__delay-1s">BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;