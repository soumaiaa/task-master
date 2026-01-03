const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Mémoire (pas de fs)
let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== Number(req.params.id));
  res.json({ success: true });
});

app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map(t =>
    t.id === id ? req.body : t
  );
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
