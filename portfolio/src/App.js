import React from "react";
import Header from './components/Header';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
      <Header />
  
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />


          </Routes>
      </div>
    </Router>
  );
}

export default App;
