export default function VideoCard({ title, onWatch }) {
  return (
    <div className="video-card">
      <h3>{title}</h3>
      <button onClick={onWatch}>Regarder</button>
    </div>
  );
}
