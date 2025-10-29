import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">PUBFLIX</div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/videos">Publicités</Link></li>
        <li><Link to="/dashboard">Tableau de bord</Link></li>
        <li><Link to="/convert">Convertir</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}
