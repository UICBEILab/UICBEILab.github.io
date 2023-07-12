import React from 'react';
import './Awards.css';
import { AwardsData } from './AwardsData';

const Awards = () => {
    return (
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
    );
};

export default Awards;