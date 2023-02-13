import React from "react";
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Header />
  
        <Routes>
      
          <Route path="/" element={<App />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
