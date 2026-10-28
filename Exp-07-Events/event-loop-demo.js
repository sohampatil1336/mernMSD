// ============================================================================
// EXPERIMENT 7 (PART 2): NODE.JS EVENT LOOP PHASES & ORDER OF EXECUTION
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const fs = require("fs");

console.log("==========================================================");
console.log("       PART 2: NODE.JS EVENT LOOP EXECUTION ORDER         ");
console.log("==========================================================");
console.log("Starting script execution...\n");

// 1. Synchronous statement 1
console.log("1. [SYNCHRONOUS] Call Stack - Task 1");

// 2. Timers Phase: setTimeout (Macrotask)
setTimeout(() => {
  console.log("5. [MACROTASK: Timers Phase] setTimeout(0ms) callback executed.");
}, 0);

// 3. Check Phase: setImmediate (Macrotask)
setImmediate(() => {
  console.log("6. [MACROTASK: Check Phase] setImmediate() callback executed.");
});

// 4. Microtask Queue: process.nextTick() (Executes before any other microtask!)
process.nextTick(() => {
  console.log("3. [MICROTASK: process.nextTick] Highest priority microtask executed.");
});

// 5. Microtask Queue: Promise.resolve().then()
Promise.resolve().then(() => {
  console.log("4. [MICROTASK: Promise.then] Microtask executed after process.nextTick.");
});

// 6. I/O Poll Phase: fs.stat (I/O Callback)
fs.stat(__filename, () => {
  console.log("7. [I/O PHASE: Poll / I/O Callbacks] File stat I/O callback executed.");

  // Inside I/O callback, setImmediate ALWAYS executes before setTimeout!
  setTimeout(() => {
    console.log("  -> [Nested in I/O] setTimeout callback.");
  }, 0);

  setImmediate(() => {
    console.log("  -> [Nested in I/O] setImmediate executed before nested setTimeout!");
  });
});

// 7. Synchronous statement 2
console.log("2. [SYNCHRONOUS] Call Stack - Task 2 (End of top-level code)\n");
