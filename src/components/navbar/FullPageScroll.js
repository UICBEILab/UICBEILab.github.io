import React from "react";
import NavBar from "./NavBar";
import Home from "../home/Home";
import Research from "../research/Research";
import Publications from "../publications/Publications";
import Courses from "../Courses";
import News from "../News";
import Team from "../Team";
import Contact from "../Contact";
import ResearchContent from "../research/ResearchContent";
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
                    {/* <Home /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </FullpageSection>

                {/* <FullpageSection style={SectionStyle}>
                    <Research />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Team />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Publications />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <News />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Courses />
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <Contact />
                </FullpageSection> */}

                {/* <FullpageSection style={SectionStyle}>
                    <ResearchContent />
                </FullpageSection> */}

            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;