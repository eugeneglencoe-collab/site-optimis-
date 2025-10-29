import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './components/DashboardPage';
import StatsCard from './components/StatsCard';
import VideoCard from './components/VideoCard';

import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Convert from './pages/Convert';
import Videos from './pages/Videos';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
