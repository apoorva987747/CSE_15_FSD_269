// using  Node.js built-in events module ,create and EventEmitter.Register multiple listener for a response  then emit the event by passing name id as arguments and display them in the console.

const EventEmitter = require("events");
const myEmitter = new EventEmitter();
myEmitter.on("response", () => {
  console.log("data recevied");
});
myEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id:${id}`);
});
myEmitter.emit("response", "Harry", 35);
