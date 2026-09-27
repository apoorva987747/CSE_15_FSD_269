const { EventEmitter } = require("events");
// const eventEmitter =new EventEmitter();
// eventEmitter.on('lunch',()=>{
//     console.log('welcome');
// })
// eventEmitter.emit('lunch')
const myEmitter = new EventEmitter();
// Event listener
myEmitter.on("click", () => {
  console.log("Button clicked !");
});
//  trigger the eventas
myEmitter.emit("click");

// part 3

setTimeout(() => {
  console.log("1. setTimeout");
}, 0);
setImmediate(() => {
  console.log("2. setImmediate");
});
process.nextTick(() => {
  console.log("3. nextTick");
});
