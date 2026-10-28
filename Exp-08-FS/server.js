const fs = require("fs");

// 1. WRITE / CREATE FILE

fs.writeFileSync("data.txt", "Hello from Node.js!");

console.log("1. File created and data written.");


// 2. OPEN FILE

fs.open("data.txt", "r", (err, file) => {
    if (err) {
        console.log("Error opening file");
        return;
    }

    console.log("2. File opened successfully.");
});


// 3. READ FILE

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log("3. File content:");
    console.log(data);
});


// 4. APPEND DATA

fs.appendFile("data.txt", "\nWelcome to MERN Stack!", (err) => {
    if (err) {
        console.log("Error appending data");
        return;
    }

    console.log("4. Data appended successfully.");
});


// 5. CREATE DIRECTORY

if (!fs.existsSync("myfolder")) {
    fs.mkdirSync("myfolder");
    console.log("5. Directory created.");
} else {
    console.log("5. Directory already exists.");
}


// 6. READ DIRECTORY

fs.readdir(".", (err, files) => {
    if (err) {
        console.log("Error reading directory");
        return;
    }

    console.log("6. Files and folders:");
    console.log(files);
});


// 7. PROCESS OBJECT - RUN AT LAST

setTimeout(() => {

    console.log("\n========== PROCESS OBJECT ==========");

    console.log("Node Version:", process.version);

    console.log("Platform:", process.platform);

    console.log("Process ID:", process.pid);

    console.log("Current Directory:", process.cwd());

    console.log("Command Line Arguments:", process.argv);

    console.log("Environment PORT:", process.env.PORT || "Not Set");

}, 1000);