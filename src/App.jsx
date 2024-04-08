import React from 'react';

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import NavBar from './pages/NavBar';
import AboutMe from './pages/AboutMe';
import FullstackPage from './pages/FullstackPage';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import MLPage from './pages/MLPage';
import CyberSecurityPage from './pages/CyberSecurity';
import MobilePage from './pages/MobilePage';
import ClippifyPage from './pages/FullstackProjects/Clippify';
import LupodyPage from './pages/FullstackProjects/Lupody';
//import UserAuthContext from './context/UserAuthContext';

function App() {

return ( 

//<UserAuthContext>   
  <Router>
    <NavBar /> 
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/fullstack-projects" element={<FullstackPage />} />
        <Route path="/machine_learning-projects" element={<MLPage />} />
        <Route path="/cyber_security-projects" element={<CyberSecurityPage />} />
        <Route path="/mobile-projects" element={<MobilePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/fullstack-projects/clippify" element={<ClippifyPage/>} />
        <Route path="/fullstack-projects/lupody" element={<LupodyPage/>} />
      </Routes>
      
  </Router>
  
//</UserAuthContext>
)}

export default App
