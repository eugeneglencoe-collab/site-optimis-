import React, { useState } from 'react';

function Convert() {
  const [tokens, setTokens] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    alert(`Vous avez converti ${tokens} jetons en argent fictif !`);
    setTokens('');
  };

  return (
    <div className="convert-container">
      <h1>Convertir vos jetons en argent réel</h1>
      <form onSubmit={handleConvert}>
        <input
          type="number"
          placeholder="Nombre de jetons"
          value={tokens}
          onChange={(e) => setTokens(e.target.value)}
          required
        />
        <button type="submit">Convertir</button>
      </form>
    </div>
  );
}

export default Convert;
