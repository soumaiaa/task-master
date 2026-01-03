import React, { useState } from "react";

function AddTask({ onAdd, darkMode }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, completed: false });
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une tâche..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: darkMode ? "#555" : "#ccc",
          fontSize: "16px",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#fff" : "#333",
          transition: "0.3s",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Ajouter
      </button>
    </form>
  );
}

export default AddTask;
