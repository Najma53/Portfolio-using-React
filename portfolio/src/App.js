import React from "react";
import Header from './components/Header';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div>
      <Header />
  
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
