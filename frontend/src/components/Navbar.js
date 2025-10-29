import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pubflix</div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/videos">Vidéos</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/convert">Convertir</Link>
        <Link to="/about">À propos</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
