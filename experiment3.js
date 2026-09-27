const http = require("http");

const server = http.createServer((req, res) => {
  // Status code
  res.statusCode = 200;

  // Response header
  res.setHeader("Content-Type", "text/plain");

  // Response
  res.write("Hello, Welcome to Node.js!");

  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//http://localhost:3000
