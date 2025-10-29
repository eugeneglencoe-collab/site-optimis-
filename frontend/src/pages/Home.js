import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container" style={{
      background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#fff",
      padding: "0 1rem"
    }}>
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "800",
        marginBottom: "1rem",
        background: "linear-gradient(90deg, #f5c518, #ffffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Gagnez de l’argent avec Pubflix
      </h1>
      <p style={{
        fontSize: "1.3rem",
        opacity: 0.9,
        marginBottom: "2rem",
        maxWidth: "600px"
      }}>
        Regardez des publicités, accumulez des jetons et transformez-les en argent réel.
      </p>
      <Link to="/videos">
        <button>Commencer à regarder</button>
      </Link>
    </div>
  );
}
