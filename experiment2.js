const fs = require("fs");

// 1. CREATE - Create a new file
fs.writeFile("student.txt", "Name: Aryan\nAge: 21\nCourse: B.Tech", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }

  console.log("File created successfully.");

  // 2. READ - Read the contents of the file
  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }

    console.log("\nFile Contents:");
    console.log(data);

    // 3. UPDATE - Add more data to the file
    fs.appendFile("student.txt", "\nSemester: 3", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }

      console.log("\nFile updated successfully.");

      // Read updated file
      fs.readFile("student.txt", "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err);
          return;
        }

        console.log("\nUpdated File Contents:");
        console.log(updatedData);

        // 4. Delete the file
        fs.unlink("student.txt", (err) => {
          if (err) {
            console.log("Error deleting file:", err);
            return;
          }

          console.log("\nFile deleted successfully.");
        });
      });
    });
  });
});
