import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About/About';
import Background from './components/Background/Background';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Stats from './components/Stats/Stats';

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Stats />
    </Router>
  );
};

export default App;
