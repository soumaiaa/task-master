import React from "react";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        boxShadow: darkMode
          ? "0 2px 10px rgba(0,0,0,0.6)"
          : "0 2px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "22px" }}>✅ TaskMaster</h1>
      <button
        onClick={toggleDarkMode}
        style={{
          padding: "8px 16px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: darkMode ? "#fff" : "#333",
          color: darkMode ? "#333" : "#fff",
          transition: "0.3s",
        }}
      >
        {darkMode ? "☀ Mode Clair" : "🌙 Mode Sombre"}
      </button>
    </header>
  );
}

export default Header;
