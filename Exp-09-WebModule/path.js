const path = require("path");

console.log("Normalize:");
console.log(path.normalize("/home//user/../student"));

console.log("\nJoin:");
console.log(path.join("/home", "student", "node"));

console.log("\nAbsolute Path:");
console.log(path.resolve("path.js"));

console.log("\nExtension:");
console.log(path.extname("server.js"));

console.log("\nFile Name:");
console.log(path.basename("/home/student/server.js"));

console.log("\nDirectory:");
console.log(path.dirname("/home/student/server.js"));