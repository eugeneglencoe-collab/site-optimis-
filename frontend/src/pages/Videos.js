import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Videos.css';

export default function Videos() {
  const token = localStorage.getItem('token');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/videos`, {
      headers: { Authorization: token }
    })
    .then(res => setVideos(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="video-grid">
      {videos.map(video => (
        <div className="card" key={video._id}>
          <h3>{video.title}</h3>
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <button>Regarder</button>
          </a>
        </div>
      ))}
    </div>
  );
}
