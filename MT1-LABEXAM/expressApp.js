import express from "express";

const app = express();
const PORT = 4000;

// B1: Configure JSON parsing middleware
app.use(express.json());

// B1 & B3: Initialize array containing at least three sample employee task records
let tasks = [
  {
    id: 1,
    taskName: "Develop Login Page",
    assignedTo: "Rahul Sharma",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    taskName: "Database Schema Design",
    assignedTo: "Priya Singh",
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 3,
    taskName: "Authentication API",
    assignedTo: "Amit Kumar",
    status: "In Progress",
    priority: "High",
  },
];

// B2: CRUD Endpoints Implementation

// GET: Retrieve all employee tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET: Retrieve a task by ID
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

// POST: Add a new task (Returns 201 Created)
app.post("/tasks", (req, res) => {
  const { id, taskName, assignedTo, status, priority } = req.body;

  if (!id || !taskName || !assignedTo || !status) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  const newTask = {
    id,
    taskName,
    assignedTo,
    status,
    priority: priority || "Medium",
  };
  tasks.push(newTask);

  res.status(201).json({
    message: "Task added successfully",
    task: newTask,
  });
});

// PUT: Update task details by ID
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found for update" });
  }

  const { taskName, assignedTo, status, priority } = req.body;

  tasks[taskIndex] = {
    id: taskId,
    taskName: taskName || tasks[taskIndex].taskName,
    assignedTo: assignedTo || tasks[taskIndex].assignedTo,
    status: status || tasks[taskIndex].status,
    priority: priority || tasks[taskIndex].priority,
  };

  res.json({
    message: "Task updated successfully",
    task: tasks[taskIndex],
  });
});

// DELETE: Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found for deletion" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json({
    message: "Task deleted successfully",
    task: deletedTask[0],
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// B1: Configure application to listen on port 4000
app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
