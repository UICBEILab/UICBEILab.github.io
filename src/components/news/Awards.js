import React, { useState } from 'react';
import './Awards.css';
import { AwardsData } from './AwardsData';
import Fade from 'react-reveal/Fade';

const Awards = () => {
    return (
        <div id="awards">
            <Fade bottom>
                <h1>-- AWARDS --</h1>
            </Fade>
            <div className="awards-container">
                {AwardsData.map((award, index) => (
                    <div key={index} className="award-card">
                        <h2>
                            {award.title}
                        </h2>
                        <p>{award.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;