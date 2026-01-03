import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { getTasks, addTask, deleteTask, toggleTask } from "../services/taskService";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    getTasks().then(setTasks).catch(err => console.error("Erreur getTasks:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);
    } catch (err) {
      console.error("Erreur addTask:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Erreur deleteTask:", err);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      const updated = await toggleTask(task);
      setTasks(tasks.map((t) => (t.id === task.id ? updated : t)));
    } catch (err) {
      console.error("Erreur toggleTask:", err);
    }
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "0.3s",
      }}
    >
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <AddTask onAdd={handleAddTask} darkMode={darkMode} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} darkMode={darkMode} />
    </div>
  );
}

export default Dashboard;
