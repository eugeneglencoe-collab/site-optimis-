import React from "react";

export default function Home() {
  console.log("✅ Page Home chargée !");
  return (
    <div style={{
      height: "100vh",
      background: "linear-gradient(180deg, #111 0%, #000 100%)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#FFD700" }}>Bienvenue sur Pubflix</h1>
      <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
        Regarde des publicités, gagne des récompenses, découvre une nouvelle expérience.
      </p>
      <button style={{
        marginTop: "30px",
        backgroundColor: "#FFD700",
        border: "none",
        color: "black",
        fontSize: "1.2rem",
        padding: "15px 30px",
        borderRadius: "25px",
        cursor: "pointer"
      }}>
        Commencer maintenant
      </button>
    </div>
  );
}
