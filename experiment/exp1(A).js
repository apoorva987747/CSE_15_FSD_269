class EventEmitter {
  constructor() {
    this.events = {};
  }

  // Register an event
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  // Trigger an event
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  }
}

// Create object
const emitter = new EventEmitter();

// Listen for greet event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome.`);
});

// Listen for exit event
emitter.on("exit", () => {
  console.log("Goodbye! See you again.");
});

// Trigger events
emitter.emit("greet", "Apoorva");
emitter.emit("exit");
