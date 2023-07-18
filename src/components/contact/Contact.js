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

    const handleAddressClick = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=842+W+Taylor+St%2C+Chicago%2C+IL+60607');
    };

    return (
        <div id="contact">
            <Fade bottom>
                <h1>-- CONTACT --</h1>
            </Fade>
            <div className="contact-content">
                <div className="map">
                    <iframe
                        src="https://maps.uic.edu/"
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
                    <div className="address" onClick={handleAddressClick}>
                        <i className="fas fa-map-marker-alt"></i>
                        <span> UIC ERF (Engineering Research Facility)</span>
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
