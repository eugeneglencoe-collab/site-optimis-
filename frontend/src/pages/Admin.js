import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const BACKEND_URL = https://site-4ry9.onrender.com; // remplace par ton URL Render réelle
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://<https://site-4ry9.onrender.com', { headers: { Authorization: token } })
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addVideo = () => {
    axios.post('https://<https://site-4ry9.onrender.com>/api/admin/add', { title, url }, { headers: { Authorization: token } })
      .then(res => setVideos([...videos, res.data.video]))
      .catch(err => console.log(err));
  };

  const deleteVideo = (id) => {
    axios.delete(`https://<https://site-4ry9.onrender.com>/api/admin/delete/${id}`, { headers: { Authorization: token } })
      .then(() => setVideos(videos.filter(v => v._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <input placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={addVideo}>Ajouter Vidéo</button>
      <div>
        {videos.map(v => (
          <div key={v._id}>
            {v.title} <button onClick={() => deleteVideo(v._id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}
