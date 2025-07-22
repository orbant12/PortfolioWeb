import React from 'react';

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import NavBar from './pages/NavBar';
import AboutMe from './pages/AboutMe';
import FullstackPage from './pages/FullstackPage';
import Contact from './pages/Contact';
import MLPage from './pages/MLPage';
import CyberSecurityPage from './pages/CyberSecurity';
import MobilePage from './pages/MobilePage';
import ClippifyPage from './pages/FullstackProjects/Clippify';
import LupodyPage from './pages/FullstackProjects/Lupody';
import PocketProtectPage from './pages/FullstackProjects/PocketProtect';
//import UserAuthContext from './context/UserAuthContext';
import PdfY from './pages/CyberProjects/artificial';
import AboutMePage from './pages/AboutMePage';
import Codify from './pages/CyberProjects/codify';
import Pilgrimage from './pages/CyberProjects/pilgrimage';
import CozyHosting from './pages/CyberProjects/cozyhosting';
import Busqueda from './pages/CyberProjects/busqueda';
import Squashed from './pages/CyberProjects/squashed';
import Precious from './pages/CyberProjects/precious';
import Photobomb from './pages/CyberProjects/photobomb';
import Irked from './pages/CyberProjects/irked';


function App() {


return ( 

//<UserAuthContext>   
  <Router>
    <NavBar /> 
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/fullstack-projects" element={<FullstackPage />} />
        <Route path="/machine_learning-projects" element={<MLPage />} />

        <Route path="/cyber_security-projects" element={<CyberSecurityPage />} />
        <Route path="/cyber_security-projects/artificial-writeup" element={<PdfY />} />
        <Route path="/cyber_security-projects/codify-writeup" element={<Codify />} />
        <Route path="/cyber_security-projects/pilgrimage-writeup" element={<Pilgrimage />} />
        <Route path="/cyber_security-projects/cozyhosting-writeup" element={<CozyHosting />} />
        <Route path="/cyber_security-projects/busqueda-writeup" element={<Busqueda />} />
        <Route path="/cyber_security-projects/squashed-writeup" element={<Squashed />} />
        <Route path="/cyber_security-projects/precious-writeup" element={<Precious />} />
        <Route path="/cyber_security-projects/photobomb-writeup" element={<Photobomb />} />
        <Route path="/cyber_security-projects/irked-writeup" element={<Irked />} />

        <Route path="/mobile-projects" element={<MobilePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fullstack-projects/clippify" element={<ClippifyPage/>} />
        <Route path="/fullstack-projects/lupody" element={<LupodyPage/>} />
        <Route path="/fullstack-projects/pocket-protect" element={<PocketProtectPage/>} />
      </Routes>
      
  </Router>
  
//</UserAuthContext>
)}

export default App
