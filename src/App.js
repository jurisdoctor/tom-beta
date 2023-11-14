import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About} />
        <Route path="/skills" element={Skills} />
        <Route path="/projects" element={Projects} />
        <Route path="/contact" element={Contact} />
      </Routes>
    </Router>
  );
};

export default App;
