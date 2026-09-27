console.log("1. Program Started");

setTimeout(() => {
  console.log("4. setTimeout executed");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate executed");
});

process.nextTick(() => {
  console.log("3. process.nextTick executed");
});

console.log("2. Program Ended");
