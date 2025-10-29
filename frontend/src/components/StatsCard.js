export default function StatsCard({ label, value }) {
  return (
    <div className="stats-card">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
}
