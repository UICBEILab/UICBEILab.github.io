import React from 'react';
import './Contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => {

    const handlePhoneClick = () => {
        window.location.href = 'tel:+13129963428';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:akaratas@uic.edu';
    };

    return (
        <div id="contact">
            <Fade bottom>
                <h1>Contact</h1>
            </Fade>
            <div className="contact-content">
                <div className="map">
                    <iframe
                        src="http://maps.uic.edu/"
                        width="100%"
                        height="650"
                        title="UIC Map"
                    ></iframe>
                </div>
                <div className="contact-info">
                    <div className="phone" onClick={handlePhoneClick}>
                        <i className="fas fa-phone"></i>
                        <span>(312) 996-3428</span>
                    </div>
                    <div className="email" onClick={handleEmailClick}>
                        <i className="fas fa-envelope"></i>
                        <span>akaratas@uic.edu</span>
                    </div>
                    <a
                        className="twitter-link"
                        href="https://twitter.com/BEI_Lab?s=20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                        <span>Follow us on Twitter</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
