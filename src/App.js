// import logo from './logo.svg';
import './App.css';
import React from "react";
import FullPageScroll from "./components/navbar/FullPageScroll";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Courses from "./components/Courses";
import Research from "./components/research/Research";
import Publications from "./components/publications/Publications";
import News from "./components/News";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Global.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
