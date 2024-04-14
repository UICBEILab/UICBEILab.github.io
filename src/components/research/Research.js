// import React, { useState } from "react";
// import './Research.css';
// import { ResearchData } from './ResearchData';
// import ResearchContent from "./ResearchContent";
// import Fade from 'react-reveal/Fade';

// const Research = () => {

//     //function when click on image, it will show the content of the research
//     const [selectedResearch, setSelectedResearch] = useState(null);

//     // Function to handle image click
//     const handleImageClick = (research) => {
//         setSelectedResearch(research);
//     };

//     // Function to clear selected research
//     const clearSelectedResearch = () => {
//         setSelectedResearch(null);
//     };

//     const handleArrowClick = (research) => {
//         setSelectedResearch(research);
//     };

//     return (
//         <div id="research">

//             <Fade bottom>
//                 <h1>-- RESEARCH --</h1>
//             </Fade>

//             {selectedResearch ? (
//                 <ResearchContent research={selectedResearch} clearResearch={clearSelectedResearch} />
//             ) : (
//                 <div className="cards">
//                     <ul className="projects-grid">
//                         {ResearchData.map((item) => {
//                             return (
//                                 <li className="projects-card" key={item.aKey}>
//                                     <div className="card">
//                                         <img
//                                             id="image"
//                                             src={item.url}
//                                             alt={item.title}
//                                             onClick={() => handleImageClick(item)}
//                                         />
//                                     </div>
//                                     <h5 className="card-title">{item.title}</h5>

//                                     <div className="arrow">
//                                         <i className="fa fa-arrow-right" aria-hidden="true" onClick={() => handleArrowClick(item)}></i>
//                                     </div>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Research;


import React, { useState } from "react";
import './Research.css';
import { ResearchData } from './ResearchData';
import ResearchContent from "./ResearchContent";
import Fade from 'react-reveal/Fade';

const Research = () => {
    const [selectedResearch, setSelectedResearch] = useState(null);
    const [activeTab, setActiveTab] = useState('ongoing'); // 'ongoing' or 'completed'

    // Function to handle image click
    const handleImageClick = (research) => {
        setSelectedResearch(research);
    };

    // Function to clear selected research
    const clearSelectedResearch = () => {
        setSelectedResearch(null);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Filter research data based on the active tab
    const filteredResearchData = ResearchData.filter(item => {
        return activeTab === 'ongoing' ? item.isOngoing : !item.isOngoing;
    });

    return (
        <div id="research">

            <Fade bottom>
                <h1>-- RESEARCH --</h1>
            </Fade>

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'ongoing' ? 'active' : ''}`}
                    onClick={() => handleTabClick('ongoing')}>
                    ONGOING PROJECTS
                </button>
                <button
                    className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
                    onClick={() => handleTabClick('completed')}>
                    COMPLETED PROJECTS
                </button>
            </div>

            {selectedResearch ? (
                <ResearchContent research={selectedResearch} clearResearch={clearSelectedResearch} />
            ) : (
                <div className="cards">
                    <ul className="projects-grid">
                        {filteredResearchData.map((item) => {
                            return (
                                <li className="projects-card" key={item.aKey}>
                                    <div className="card">
                                        <img
                                            id="image"
                                            src={item.url}
                                            alt={item.title}
                                            onClick={() => handleImageClick(item)}
                                        />
                                    </div>
                                    <h5 className="card-title">{item.title}</h5>
                                    {/* Display the arrow when hovering over the card */}
                                    <div className="arrow">
                                        <i className="fa fa-arrow-right" aria-hidden="true" onClick={() => handleImageClick(item)}></i>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Research;
