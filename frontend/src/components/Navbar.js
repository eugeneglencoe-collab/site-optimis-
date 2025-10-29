import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Pubflix</h2>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/videos">Vidéos</Link></li>
        <li><Link to="/convert">Convertir</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}
