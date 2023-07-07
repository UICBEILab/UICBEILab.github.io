import React from "react";
import { PublicationsData } from './PublicationsData';
import SimpleTab, {Tab} from "./SimpleTab";
import './Publications.css';
// import FadeBottom from "../FadeBottom";
import Fade from 'react-reveal/Fade';
// import { ScrollContainer, Animator, ScrollPage, Fade, batch } from "react-scroll-motion";
import { Scroll } from "@react-three/drei";

const Publications = () => {
    return (
        <div id="publications">
            <Fade bottom>
                <h1>Publications</h1>
            </Fade>
                {/* <h1 className="animate__animated animate__fadeInUpBig">Publications</h1> */}
            <SimpleTab activeKey="journal">
                {PublicationsData.map(item => 
                    <Tab key={item.aKey} aKey={item.aKey} title={item.title}>
                        {item.content}
                    </Tab> 
                )}
            </SimpleTab>
        </div>
    );
}

export default Publications;
