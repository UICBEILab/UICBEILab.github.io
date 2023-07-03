// import logo from './logo.svg';
// import './App.css';
import React from "react";

import FullPageScroll from "./components/FullPageScroll";
import NavBar from "./components/NavBar";

import "./styles/Global.css";
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <NavBar />
      {/* <FullPageScroll /> */}
    </div>
  );
}

export default App;
