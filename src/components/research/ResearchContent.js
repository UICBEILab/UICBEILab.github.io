import React from "react";
import { Segment, Image } from "semantic-ui-react";
import { Divider, Header } from "semantic-ui-react";
import {ResearchData} from './ResearchData';
import { Stylesheet } from 'the-platform';
import './ResearchContent.css';

// const ResearchContent = ({ research }) => {
//     return (
//         <div id="research-content">
//             <div className="content-box">
//                 <h3>{research.title}</h3>
//                 <div className="content-desc">
//                     <img src={research.url} alt={research.title} />
//                     <div>{research.content}</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResearchContent;


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
