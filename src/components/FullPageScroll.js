import React from "react";
import NavBar from "./navbar/NavBar";
import Home from "./home/Home";
import Research from "./Research";
import Publications from "./publications/Publications";
import Courses from "./Courses";
import News from "./News";
import Team from "./Team";

import { Routes, Route } from "react-router-dom";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const FullPageScroll = () => {
    const SectionStyle = {
        height: '100vh',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--navy)',
        color: '#ffffff',
    }
    return (
        <Fullpage>
            
            <FullPageSections>

                <FullpageSection style={SectionStyle}>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Research />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Publications />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Courses />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <News />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Team />
                </FullpageSection>

            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;