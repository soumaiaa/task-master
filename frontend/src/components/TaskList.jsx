import React from "react";

function TaskList({ tasks, onDelete, onToggle, darkMode }) {
  if (!tasks.length)
    return (
      <p style={{ textAlign: "center", color: darkMode ? "#aaa" : "#777" }}>
        Aucune tâche pour le moment.
      </p>
    );

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
            padding: "12px 16px",
            borderRadius: "10px",
            boxShadow: darkMode
              ? "0 2px 5px rgba(0,0,0,0.5)"
              : "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: task.completed
              ? "#2e7d32"
              : darkMode
              ? "#1e1e1e"
              : "#fff",
            color: task.completed ? "#fff" : darkMode ? "#fff" : "#333",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <span onClick={() => onToggle(task)} style={{ flex: 1, textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              background: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

