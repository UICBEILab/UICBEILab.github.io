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

import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Research />
      <Team />
      <Publications />
      <News />
      <Courses />
      <Contact />
      {/* <FullPageScroll /> */}
    </div>
  );
}

export default App;
