import React, { useState } from "react";
import './Research.css';
import { ResearchContentDisplay, ResearchDataCompleted } from './ResearchContentDisplay';
import ResearchContent from "./ResearchContent";
import Fade from 'react-reveal/Fade';
import SimpleTab, { Tab } from "./SimpleTab";

const Research = () => {
    // Function to handle image click
    const [selectedResearch, setSelectedResearch] = useState(null);
    


    return (
        <div id="research">
            <Fade bottom>
                <h1>-- RESEARCH --</h1>
            </Fade>
            <SimpleTab activeKey="1">
                {ResearchContentDisplay.map(tab =>
                    <Tab key={tab.aKey} aKey={tab.aKey} title={tab.title}>
                        {tab.content}
                    </Tab>
                )}
            </SimpleTab>
        </div>
    );
}


export default Research;