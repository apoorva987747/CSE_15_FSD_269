const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method);
  res.end("Hello World");
});
server.listen(8000);
