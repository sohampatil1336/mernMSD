const fs = require("fs");

// Create readable stream
const readerStream = fs.createReadStream("input.txt");

// Create writable stream
const writerStream = fs.createWriteStream("output.txt");

// Pipe input to output
readerStream.pipe(writerStream);

console.log("File copied successfully.");