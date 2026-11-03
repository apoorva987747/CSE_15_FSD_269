import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory tasks array for HTTP module
let tasks = [
  {
    id: 1,
    taskName: "Design UI Layout",
    assignedTo: "Apoorva",
    status: "Completed",
    priority: "High",
  },
  {
    id: 2,
    taskName: "Setup Node Server",
    assignedTo: "Rahul",
    status: "Pending",
    priority: "Medium",
  },
];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // A2 & A3 & A4: Routing & Handlers
  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Employee Task Management HTTP Server</h1>");
  } else if (req.method === "GET" && pathname === "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } else if (req.method === "GET" && pathname === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        application: "Employee Task Management Web Application",
        module: "Node.js HTTP & FS Module Lab Examination",
        version: "1.0.0",
      }),
    );
  } else if (req.method === "GET" && pathname === "/home") {
    // A4: Static File Serving using FS Module
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found: index.html file missing");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.method === "POST" && pathname === "/add-task") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const newTask = JSON.parse(body);
        // A5: Validation of required fields
        if (
          !newTask.id ||
          !newTask.taskName ||
          !newTask.assignedTo ||
          !newTask.status
        ) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error:
                "Missing required fields: id, taskName, assignedTo, status",
            }),
          );
          return;
        }
        tasks.push(newTask);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: "Task added successfully", task: newTask }),
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
  } else {
    // A5: Error Handling for invalid routes
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "404 - Route Not Found" }));
  }
});

// A1: Start Server on Port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`HTTP Server running at http://localhost:${PORT}`);
});
