import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/videos`, { headers: { Authorization: token } })
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  const addVideo = () => {
    axios.post(`${BACKEND_URL}/api/admin/add`, { title, url }, { headers: { Authorization: token } })
      .then(res => setVideos([...videos, res.data.video]))
      .catch(err => console.log(err));
  };

  const deleteVideo = (id) => {
    axios.delete(`${BACKEND_URL}/api/admin/delete/${id}`, { headers: { Authorization: token } })
      .then(() => setVideos(videos.filter(v => v._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <input placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={addVideo}>Ajouter Vidéo</button>
      <div>
        {videos.map(v => (
          <div className="card" key={v._id}>
            <h3>{v.title}</h3>
            <button onClick={() => deleteVideo(v._id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
}
