// ============================================================================
// EXPERIMENT 7 (PART 1): NODE.JS EVENTS & EVENT EMITTER DEMO
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const EventEmitter = require("events");

// Create an instance of EventEmitter
class PracticalEmitter extends EventEmitter {}
const myEmitter = new PracticalEmitter();

console.log("==========================================================");
console.log("      PART 1: NODE.JS EVENT EMITTER DEMONSTRATION         ");
console.log("==========================================================");

// 1. Register a standard event listener using .on()
myEmitter.on("greet", (name, rollNo) => {
  console.log(`[Event: greet] Hello, ${name}! Your Roll No is ${rollNo}.`);
});

// 2. Register multiple listeners for the same event
myEmitter.on("greet", (name) => {
  console.log(`[Event: greet - Listener 2] Logging greeting for ${name} at ${new Date().toLocaleTimeString()}`);
});

// 3. Register a one-time listener using .once()
myEmitter.once("initialize", () => {
  console.log("[Event: initialize] This listener runs ONLY ONCE and unregisters itself.");
});

// 4. Custom User Action Event with structured data object
myEmitter.on("userLogin", (user) => {
  console.log("\n[Event: userLogin] User logged in successfully!");
  console.log("  - User ID   :", user.id);
  console.log("  - Username  :", user.username);
  console.log("  - Role      :", user.role);
  console.log("  - Timestamp :", user.timestamp);
});

// 5. Removing a listener dynamically (.off() / .removeListener())
const notificationHandler = (msg) => {
  console.log("[Event: notify] Notification received:", msg);
};
myEmitter.on("notify", notificationHandler);

// 6. Error Event Handling
myEmitter.on("error", (err) => {
  console.error("[Event: error] Caught an error gracefully:", err.message);
});

// ============================================================================
// EMITTING EVENTS
// ============================================================================
console.log("\n--- Emitting 'initialize' Event ---");
myEmitter.emit("initialize");
myEmitter.emit("initialize"); // Will NOT trigger again

console.log("\n--- Emitting 'greet' Event ---");
myEmitter.emit("greet", "Anuj Arun Powar", 13);

console.log("\n--- Emitting 'userLogin' Event ---");
myEmitter.emit("userLogin", {
  id: 101,
  username: "anuj_powar",
  role: "Student",
  timestamp: new Date().toISOString(),
});

console.log("\n--- Emitting 'notify' before and after removal ---");
myEmitter.emit("notify", "Message 1: Before removing listener");
myEmitter.off("notify", notificationHandler);
myEmitter.emit("notify", "Message 2: This will NOT be printed because listener was removed.");

console.log("\n--- Emitting 'error' Event ---");
myEmitter.emit("error", new Error("Sample simulated system error in EventEmitter"));

console.log("\nEventEmitter Demonstration Completed!");
