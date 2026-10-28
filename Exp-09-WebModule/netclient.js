const net = require("net");

const client = net.connect({
    port: 8080
}, () => {

    console.log("Connected to server!");

});

client.on("data", (data) => {

    console.log("Server:", data.toString());

    client.end();

});

client.on("end", () => {

    console.log("Disconnected from server");

});