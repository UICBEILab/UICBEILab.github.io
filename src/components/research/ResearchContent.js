import React, { useState, useEffect } from "react";
import "./ResearchContent.css";

const ResearchContent = ({ research, clearResearch }) => {
    const [showLargeImage, setShowLargeImage] = useState(false);
    const [imageSize, setImageSize] = useState(300); // Initial size

    const handleGoBack = () => {
        clearResearch();
    };

    const handleImageClick = () => {
        setShowLargeImage(!showLargeImage);
    };

    const handleScroll = (e) => {
        if (showLargeImage) {
            const scrollAmount = e.deltaY;
            setImageSize((prevSize) => prevSize + scrollAmount);
        }
    };

    useEffect(() => {
        if (showLargeImage) {
            document.addEventListener("wheel", handleScroll);
        } else {
            document.removeEventListener("wheel", handleScroll);
        }
        return () => {
            document.removeEventListener("wheel", handleScroll);
        };
    }, [showLargeImage]);

    return (
        <div id="research-content">
            <div className="content-box">
                <h3>{research.title}</h3>
                <div className={`content-desc${showLargeImage ? " large-image" : ""}`}>
                    <div className="image-container">
                        <img
                            src={research.url}
                            alt={research.title}
                            onClick={handleImageClick}
                            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
                            className={showLargeImage ? "large-image" : ""}
                        />
                        {!showLargeImage && <div className="zoom-note">Click & scroll to Zoom</div>}
                    </div>
                    <div className="content-desc-info">{research.content}</div>
                </div>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default ResearchContent;
