const API_URL = "https://task-master-backend-s3b2.onrender.com/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Impossible de récupérer les tâches");
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const toggleTask = async (task) => {
  const res = await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...task, completed: !task.completed }),
  });
  return res.json();
};

