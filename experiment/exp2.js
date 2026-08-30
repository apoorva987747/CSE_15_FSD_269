const fs = require("fs");

// CREATE
fs.writeFileSync("student.txt", "Name: Apoorva\nBranch: CSE");
console.log("File created successfully.");

// READ
const data = fs.readFileSync("student.txt", "utf8");
console.log("\nFile Content:");
console.log(data);

// UPDATE
fs.appendFileSync("student.txt", "\nCollege: ABES Engineering College");
console.log("\nFile updated successfully.");

// DELETE
fs.unlinkSync("student.txt");
console.log("File deleted successfully.");
