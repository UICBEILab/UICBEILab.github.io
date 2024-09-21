import React, { useState } from 'react';
import './Awards.css';
import { AwardsData } from './AwardsData';
import Fade from 'react-reveal/Fade';

const Awards = () => {
    const [activeTab, setActiveTab] = useState("Ongoing");

    // Group awards by status
    const ongoingAwards = AwardsData.filter(award => award.status === 'Ongoing');
    const completedAwards = AwardsData.filter(award => award.status === 'Completed');

    return (
        <div id="awards">
            <Fade bottom>
                <h1>-- AWARDS --</h1>
            </Fade>

            {/* Tabs for "Ongoing" and "Completed" */}
            <div className="tabs">
                <button
                    className={activeTab === "Ongoing" ? "tab-button active" : "tab-button"}
                    onClick={() => setActiveTab("Ongoing")}
                >
                    Ongoing Awards
                </button>
                <button
                    className={activeTab === "Completed" ? "tab-button active" : "tab-button"}
                    onClick={() => setActiveTab("Completed")}
                >
                    Completed Awards
                </button>
            </div>

            {/* Conditional rendering based on activeTab */}
            <div className="awards-content">
                {activeTab === "Ongoing" && (
                    <div className="awards-section">
                        <div className="awards-container">
                            {ongoingAwards.map((award, index) => (
                                <div key={index} className="award-card">
                                    <h3>{award.title}</h3>
                                    <p>{award.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === "Completed" && (
                    <div className="awards-section">
                        <div className="awards-container">
                            {completedAwards.map((award, index) => (
                                <div key={index} className="award-card">
                                    <h3>{award.title}</h3>
                                    <p>{award.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Awards;

