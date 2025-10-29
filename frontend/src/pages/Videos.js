import React from 'react';
import VideoCard from '../components/VideoCard';

function Videos() {
  const mockVideos = [
    { id: 1, title: 'Pub 1', description: 'Description de la pub 1' },
    { id: 2, title: 'Pub 2', description: 'Description de la pub 2' },
    { id: 3, title: 'Pub 3', description: 'Description de la pub 3' },
  ];

  return (
    <div className="videos-container">
      <h1>Toutes les publicités</h1>
      <div className="videos-grid">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} title={video.title} description={video.description} />
        ))}
      </div>
    </div>
  );
}

export default Videos;
