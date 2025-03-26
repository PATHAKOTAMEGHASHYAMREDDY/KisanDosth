// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FarmerLogin from './pages/FarmerLogin';
import CustomerLogin from './pages/customerlogin';
import GovtLogin from './pages/govtlogin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/govt-login" element={<GovtLogin />} />
      </Routes>
    </Router>
  );
}

export default App;