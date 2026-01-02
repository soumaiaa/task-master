const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get("/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("tasks.json"));
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("tasks.json"));
  const newTask = req.body;
  tasks.push(newTask);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
