import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // si tu veux styliser séparément

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue sur Pubflix</h1>
      <p>Gagnez de l'argent en regardant des publicités !</p>
      <Link to="/dashboard">
        <button className="cta-button">Voir mon tableau de bord</button>
      </Link>
    </div>
  );
}

export default Home;
