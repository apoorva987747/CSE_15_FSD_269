// Q=>Write a Node.js program to create a basic HTTP server that handles different URL routes.
// The server should:
// Display" home page" when the user visits/.
// Display "about page"when the user visits/about.
// Return a 404 status code and display "Page not found" for any invalid URL.
// Provide a link to return to the Home Page on the 404 page.
// Run the server on port 3000.

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <h1>Page not found</h1>
            <a href="/">Return to Home Page</a>
        `);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
