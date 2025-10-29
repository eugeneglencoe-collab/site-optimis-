import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Convert from "./pages/Convert";
import About from "./pages/About";
import DashboardPage from "./components/DashboardPage";
import Admin from "./pages/Admin";
import "./style/main.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
