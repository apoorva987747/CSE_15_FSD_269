const express = require("express");

const app = express();

app.use(express.json());

// Sample data
let users = [
  {
    id: 1,
    name: "Aprajita",
    email: "aprajita@gmail.com",
  },
  {
    id: 2,
    name: "Student",
    email: "student@gmail.com",
  },
];

// GET - Retrieve all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET - Retrieve a single user
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
});

// POST - Add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// PUT - Update an existing user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.status(200).json({
    message: "User updated successfully",
    user: user,
  });
});

// DELETE - Delete a user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser[0],
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
