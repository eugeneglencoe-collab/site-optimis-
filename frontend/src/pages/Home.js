import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Gagnez de l'argent en regardant des vidéos</h1>
      <p>Regardez des publicités, accumulez des jetons et convertissez-les en argent réel.</p>
      <div className="home-cta">
        <Link to="/dashboard"><button>Commencer</button></Link>
      </div>
    </div>
  );
}
