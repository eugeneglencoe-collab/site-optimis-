import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Videos from "./pages/Videos";
import Convert from "./pages/Convert";
import About from "./pages/About";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
