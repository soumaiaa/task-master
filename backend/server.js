import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

/**
 * ⚠️ IMPORTANT
 * Sur Render, on utilise une mémoire TEMPORAIRE
 * (pas de fs, pas de writeFile)
 */
let tasks = [];

/* Test backend */
app.get("/", (req, res) => {
  res.send("Backend Task Master OK ✅");
});

/* Get tasks */
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

/* Add task */
app.post("/tasks", (req, res) => {
  const { text, completed } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ error: "Task text required" });
  }

  const newTask = {
    id: Date.now(),
    text,
    completed: completed ?? false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

/* Delete task */
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.status(204).send();
});

/* Toggle task */
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = !task.completed;
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
