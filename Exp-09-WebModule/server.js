const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

    fs.readFile("index.html", (err, data) => {

        if (err) {
            response.writeHead(404, {
                "Content-Type": "text/html"
            });

            response.end("File not found");
            return;
        }

        response.writeHead(200, {
            "Content-Type": "text/html"
        });

        response.end(data);
    });

});

server.listen(8081, () => {
    console.log("Server running at http://localhost:8081");
});