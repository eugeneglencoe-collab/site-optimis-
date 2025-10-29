export default function Convert() {
  const tokens = 100; // récupérer depuis API
  return (
    <div className="convert">
      <h1>Convertir vos jetons en argent réel</h1>
      <p>Jetons disponibles : {tokens}</p>
      <button>Convertir</button>
    </div>
  );
}
