import React from "react";
import './ResearchContent.css';

const ResearchContent = ({ research, clearResearch }) => {
    const handleGoBack = () => {
        clearResearch();
    };

    return (
        <div id="research-content">
            <div className="content-box">
                <h3>{research.title}</h3>
                <div className="content-desc">
                    <img src={research.url} alt={research.title} />
                    <div className="content-desc-info">{research.content}</div>
                </div>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default ResearchContent;
