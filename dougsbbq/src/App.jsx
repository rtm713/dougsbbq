import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Recipes from './components/Recipes';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router basename="/dougsbbq"> {/* Ensure this matches your GitHub Pages repo name */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="recipes" element={<Recipes />} />
        {/* Add other routes as needed */}
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;