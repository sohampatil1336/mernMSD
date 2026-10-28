const fs = require("fs");

const data = "Welcome to Node.js Writable Stream!";

// Create writable stream
const writerStream = fs.createWriteStream("output.txt");

// Write data
writerStream.write(data, "UTF8");

// End stream
writerStream.end();

// When writing is complete
writerStream.on("finish", () => {
    console.log("Write completed.");
});

// Handle error
writerStream.on("error", (err) => {
    console.log(err.message);
});