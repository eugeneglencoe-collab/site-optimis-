import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [user, setUser] = useState({ tokens: 0, videosWatched: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://<ton_backend_url>/api/auth/me', { headers: { Authorization: token } })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <p>Jetons : {user.tokens}</p>
      <p>Vidéos regardées : {user.videosWatched}</p>
    </div>
  );
}
