import logo from './logo.svg';
import './App.css';
import "./styles/Global.css";

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Research from './components/research/Research';
import Team from './components/team/Team';
import Publications from './components/publications/Publications';
import News from './components/news/News';
import Awards from './components/news/Awards';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';
import NewSection from './components/newSection/NewSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <NewSection />
      <Research />
      <Team />
      <Publications />
      {/* <News username="@BEI_Lab"/> */}
      <Awards />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
