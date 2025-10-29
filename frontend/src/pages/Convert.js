import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Convert() {
  const token = localStorage.getItem('token');
  const [tokens, setTokens] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/stats`, {
      headers: { Authorization: token }
    })
    .then(res => setTokens(res.data.tokens))
    .catch(err => console.log(err));
  }, []);

  const convert = () => {
    setAmount(tokens * 0.01);
    alert(`Vous avez converti vos jetons en ${tokens * 0.01} € !`);
  };

  return (
    <div className="convert-container">
      <h1>Convertir vos jetons</h1>
      <p>Jetons disponibles : {tokens}</p>
      <button onClick={convert}>Convertir en argent</button>
      {amount > 0 && <p>Montant converti : {amount} €</p>}
    </div>
  );
}
