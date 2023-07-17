import React, { useState } from 'react';
import { TeamData } from './TeamData';
import Fade from 'react-reveal/Fade';
import './Team.css';

const Team = ({ data }) => {

    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (key) => {
        setHoveredCard(key);
    };

    const handleResumeDownload = (resumeLink) => {
        window.open(resumeLink, '_blank');
    };

    return (
        <div id="team">
            <Fade bottom>
                <h1>Our Team</h1>
            </Fade>

            <div className="team-container">
                {TeamData.map(member => (
                    <div
                        key={member.aKey}
                        className={`member-card ${hoveredCard === member.aKey ? 'hovered' : ''}`}
                        onMouseEnter={() => handleCardHover(member.aKey)}
                        onMouseLeave={() => handleCardHover(null)}
                    >
                        <div className="member-info">
                            <div className="member-image">
                                <img src={member.image} alt="Profile" />
                            </div>
                            <div className="member-details">
                                <h3>{member.title}</h3>
                                <p>{member.name}</p>
                                <div className="hover-icons">
                                    {member.resumeLink && (
                                        <a href={member.resumeLink} target="_blank" rel="noopener noreferrer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleResumeDownload(member.resumeLink);
                                            }}>
                                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                        </a>
                                    )}
                                    {member.linkedinLink && (
                                        <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <div className="member-content">
                            {member.content.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div> */}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Team;