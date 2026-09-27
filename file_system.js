const fs = require("fs");
// fs.readFile("file.text","utf8",(err,data)=>{
//     console.log(err,data);
// });
// console.log("Finish reading the file");
//create
fs.writeFileSync("data.txt", "hello students");
//read
console.log(fs.readFileSync("data.txt", "utf8"));
//update
fs.appendFileSync("data.txt", "\nWelcome to node.js");
//read update data
console.log(fs.readFileSync("data.txt", "utf8"));
//delete
fs.unlinkSync("data.txt");
console.log("file deleted");
