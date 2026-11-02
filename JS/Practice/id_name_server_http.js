// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{
//         "Content-Type":"application/json",});
//         res.end( JSON.stringify({
//             id:1,
//             name:"Laptop",

//         }),);
// });
// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      id: 1,
      name: "Laptop",
    }),
  );
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
