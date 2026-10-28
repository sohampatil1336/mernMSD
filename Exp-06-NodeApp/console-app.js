// ============================================================================
// EXPERIMENT 6 (PART 1): CONSOLE-BASED NODE.JS APPLICATION
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const os = require("os");
const readline = require("readline");

console.log("==========================================================");
console.log("     PART 1: CONSOLE BASED NODE.JS APPLICATION            ");
console.log("==========================================================");

// 1. Console Output Methods
console.log("\n--- 1. Console Output Formatting ---");
console.log("Standard Log: Welcome to Node.js Console Application!");
console.info("Info Message: Running on Node version " + process.version);
console.warn("Warning Message: This is a sample console warning.");
console.error("Error Message: This is a sample console error output.");

// 2. Tabular Output
console.log("\n--- 2. Tabular Data with console.table() ---");
const students = [
  { rollNo: 13, name: "Anuj Arun Powar", branch: "CSE", year: "B.Tech" },
  { rollNo: 14, name: "Rahul Patil", branch: "CSE", year: "B.Tech" },
  { rollNo: 15, name: "Pooja Shinde", branch: "CSE", year: "B.Tech" },
];
console.table(students);

// 3. Process & System Diagnostics
console.log("\n--- 3. System & Process Diagnostics ---");
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Process ID (PID):", process.pid);
console.log("Current Directory:", process.cwd());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", (os.freemem() / (1024 * 1024)).toFixed(2), "MB");
console.log("Total Memory:", (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2), "GB");

// 4. Command Line Arguments (process.argv)
console.log("\n--- 4. Command Line Arguments (process.argv) ---");
console.log("Full process.argv array:", process.argv);
const customArgs = process.argv.slice(2);
if (customArgs.length > 0) {
  console.log("User Provided Arguments:", customArgs);
} else {
  console.log("Tip: You can pass arguments like: node console-app.js hello 123");
}

// 5. Execution Benchmarking (console.time / console.timeEnd)
console.log("\n--- 5. Performance Timer ---");
console.time("Loop 1,000,000 Iterations");
let total = 0;
for (let i = 0; i < 1000000; i++) {
  total += i;
}
console.timeEnd("Loop 1,000,000 Iterations");
console.log("Computed Sum:", total);

// 6. Interactive User Input using readline module
console.log("\n--- 6. Interactive Readline Demo ---");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", (userName) => {
  rl.question("Enter your roll number: ", (userRoll) => {
    console.log(`\nHello ${userName}! Your Roll Number ${userRoll} is recorded.`);
    console.log("Console application demonstration finished successfully!\n");
    rl.close();
  });
});
