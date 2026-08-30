const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// Simulate click event
eventEmitter.on("click", () => {
  console.log("Button clicked!");
});

// Simulate mouseover event
eventEmitter.on("mouseover", () => {
  console.log("Mouse is over the button!");
});

// Trigger events
eventEmitter.emit("click");
eventEmitter.emit("mouseover");
