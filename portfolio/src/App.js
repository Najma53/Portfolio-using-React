import React from "react";
import Header from './components/Header';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div>
      <Header />
  
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />


          </Routes>
      </div>
    </Router>
  );
}

export default App;
