import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://<ton_backend_url>/api/videos', { headers: { Authorization: token } })
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  const watchVideo = (id) => {
    axios.post(`https://<ton_backend_url>/api/videos/watch/${id}`, {}, { headers: { Authorization: token } })
      .then(res => alert(`Vous avez gagné 1 centime ! Total jetons : ${res.data.tokens}`))
      .catch(err => console.log(err));
  };

  return (
    <div className="videos">
      <h1>Toutes les vidéos</h1>
      <div className="video-grid">
        {videos.map(v => (
          <div key={v._id} className="video-card">
            <h3>{v.title}</h3>
            <button onClick={() => watchVideo(v._id)}>Regarder</button>
          </div>
        ))}
      </div>
    </div>
  );
}
