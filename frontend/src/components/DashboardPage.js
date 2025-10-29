import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export default function Dashboard() {
  const token = localStorage.getItem('token');
  const [stats, setStats] = useState({ videosWatched: 0, tokens: 0, money: 0 });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/stats`, {
      headers: { Authorization: token }
    })
    .then(res => setStats(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stats-card">
          <h2>{stats.videosWatched}</h2>
          <p>Vidéos regardées</p>
        </div>
        <div className="stats-card">
          <h2>{stats.tokens}</h2>
          <p>Jetons accumulés</p>
        </div>
        <div className="stats-card">
          <h2>{stats.money} €</h2>
          <p>Argent gagné</p>
        </div>
      </div>
    </div>
  );
}
