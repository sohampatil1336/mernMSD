const http = require("http");
const fs = require("fs");
const path = require("path");

// Native HTTP Server demonstrating MERN architecture integration
const PORT = 5000;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // API endpoint
  if (req.url === "/api/status" && req.method === "GET") {
    const statusData = {
      status: "Online",
      timestamp: new Date().toISOString(),
      stack: {
        database: "MongoDB (Document Database)",
        backend: "Express.js + Node.js (Runtime & Server)",
        frontend: "React.js (Component View Layer)",
      },
      message: "MERN Stack Architecture is operational and connected!",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(statusData, null, 2));
    return;
  }

  // Serve static HTML client
  if (req.url === "/" || req.url === "/index.html") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server error loading index.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found");
});

server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(` MERN Stack Demo Server running on port ${PORT}`);
  console.log(` Open: http://localhost:${PORT}`);
  console.log(` API Endpoint: http://localhost:${PORT}/api/status`);
  console.log(`=================================================`);
});
