import React from "react";
import '../styles/Home.css';
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
        {/* // <section className="banner" id="home"> */}
            {/* <Container> */}
            <div className='row'>
                {/* <Row className="align-items-center"> */}
                    {/* <div class="col-lg-6 col-md-6 col-sm-12"> */}
                    {/* <Col xs={12} md={6} xl={7}> */}

                <div className='col'>
                    <div className='leftside'>
                        <Earth />
                    </div>
                </div>

                <div className='col'>
                    <div className='rightside'>
                        <h1 class="animate__animated animate__fadeInUpBig">Built Environment and Infrastructure Laboratory (BEI Lab)</h1>
                        <p class="animate__animated animate__fadeInUpBig animate__delay-1s">BEI-Lab investigates the high-performance built environment and sustainable infrastructure solutions that account for the dynamics of multi-scale systems coupled with human-in-the-loop models.</p>
                    </div>
                </div>

                    {/* </Col> */}
                    {/* </div> */}

                    {/* <div class="col-lg-6 col-md-6 col-sm-12"> */}
                    {/* <Col xs={12} md={6} xl={7}> */}
                    {/* </Col> */}
                {/* </Row>                 */}
                
            {/* </Container> */}
            </div>
        </div>
        // </section>
    );
}

export default Home;