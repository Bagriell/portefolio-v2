import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing/Landing';
import Commpetencies from './pages/Competencies/Competencies';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar';
import Contacts from './pages/Contacts/Contacts';
import Competencies from './pages/Competencies/Competencies';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container-body'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
