const EventEmitter = require("events");

// Create an object that behaves like a button
class Button extends EventEmitter {
  click() {
    console.log("Button was clicked.");
    this.emit("click");
  }

  mouseOver() {
    console.log("Mouse moved over the button.");
    this.emit("mouseover");
  }
}

// Create button object
const button = new Button();

// Register click event
button.on("click", () => {
  console.log("Click event handler executed.");
});

// Register mouseover event
button.on("mouseover", () => {
  console.log("Mouseover event handler executed.");
});

// Simulate DOM events
console.log("Simulating button events...\n");

button.mouseOver();

console.log();

button.click();
