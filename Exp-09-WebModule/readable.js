const fs = require("fs");

let data = "";

// Create readable stream
const readerStream = fs.createReadStream("input.txt");

// Set encoding
readerStream.setEncoding("UTF8");

// Read data
readerStream.on("data", (chunk) => {
    data += chunk;
});

// When reading is complete
readerStream.on("end", () => {
    console.log("File Content:");
    console.log(data);
});

// Handle error
readerStream.on("error", (err) => {
    console.log(err.message);
});