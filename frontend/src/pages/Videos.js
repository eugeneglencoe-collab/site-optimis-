import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Videos.css"; // Crée ce fichier pour le style

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem("token"); // Si tu veux sécuriser certaines vidéos

  useEffect(() => {
    axios
      .get("https://site-4ry9.onrender.com/api/videos", {
        headers: { Authorization: token },
      })
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.videos;
        setVideos(data || []);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div className="videos-container">
      <h1 className="videos-title">Publicités à regarder</h1>

      {videos.length === 0 ? (
        <p className="videos-empty">Aucune vidéo disponible pour le moment.</p>
      ) : (
        <div className="videos-carousel">
          {videos.map((v) => (
            <div className="video-card" key={v._id}>
              <video src={v.url} controls className="video-player" />
              <h3 className="video-title">{v.title}</h3>
              <button className="video-button">Regarder et gagner</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
