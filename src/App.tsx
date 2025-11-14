import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import WhoWeAre from './who';
import WhatWeDo from './what';
import Projects from './projects';
import Admin from './pages/Admin';
import WelcomeModal from './components/WelcomeModal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WelcomeModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who" element={<WhoWeAre />} />
        <Route path="/what" element={<WhatWeDo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
