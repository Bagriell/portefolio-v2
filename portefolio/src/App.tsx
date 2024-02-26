import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
