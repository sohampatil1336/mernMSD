const net = require("net");

const server = net.createServer((connection) => {

    console.log("Client connected");

    connection.write("Hello from Node.js TCP Server!\n");

    connection.on("end", () => {
        console.log("Client disconnected");
    });

});

server.listen(8080, () => {
    console.log("TCP Server is running on port 8080");
});