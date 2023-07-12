import logo from './logo.svg';
import './App.css';
import "./styles/Global.css";

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Research from './components/research/Research';
import Team from './components/team/Team';
import Publications from './components/publications/Publications';
import News from './components/news/News';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Research />
      <Team />
      <Publications />
      <News username="@BEI_Lab"/>
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
