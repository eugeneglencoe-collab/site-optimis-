import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Mon tableau de bord</h1>
      <div className="stats-grid">
        <div className="stats-card">
          <h2>10</h2>
          <p>Vidéos regardées</p>
        </div>
        <div className="stats-card">
          <h2>50</h2>
          <p>Jetons accumulés</p>
        </div>
        <div className="stats-card">
          <h2>5 €</h2>
          <p>Argent gagné</p>
        </div>
      </div>
    </div>
  );
}

