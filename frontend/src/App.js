import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AdsPage from './components/AdsPage';
import ConvertTokens from './components/ConvertTokens';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/convert" element={<ConvertTokens />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
