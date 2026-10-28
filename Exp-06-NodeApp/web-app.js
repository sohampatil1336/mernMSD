// ============================================================================
// EXPERIMENT 6 (PART 2): WEB-BASED NODE.JS APPLICATION
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`[${new Date().toLocaleTimeString()}] ${method} request to: ${url}`);

  // Route 1: Home Page (Serves HTML file)
  if (url === "/" || url === "/index.html") {
    const htmlPath = path.join(__dirname, "index.html");
    fs.readFile(htmlPath, "utf8", (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Unable to read index.html");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
    return;
  }

  // Route 2: Student Details JSON API
  if (url === "/api/student") {
    const studentData = {
      rollNo: 13,
      name: "Anuj Arun Powar",
      branch: "Computer Science & Engineering",
      class: "B.Tech (Semester 7)",
      subject: "MERN Stack Development (MSD)",
      college: "D. Y. Patil College of Engineering & Technology, Kolhapur",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(studentData, null, 2));
    return;
  }

  // Route 3: Server Info & Timestamp JSON API
  if (url === "/api/info") {
    const info = {
      serverTime: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      platform: process.platform,
      memoryUsageMB: (process.memoryUsage().rss / (1024 * 1024)).toFixed(2),
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(info, null, 2));
    return;
  }

  // Route 4: About Text Route
  if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Experiment 6: Web Based Node.js Application running on HTTP module.");
    return;
  }

  // Fallback: 404 Not Found
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <body style="font-family:sans-serif; text-align:center; padding:50px;">
        <h1 style="color:#ef4444;">404 - Page Not Found</h1>
        <p>The requested route <code>${url}</code> does not exist.</p>
        <a href="/">Return to Home</a>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`==========================================================`);
  console.log(`  Web-based Node.js Server is running!                    `);
  console.log(`  Access URL: http://localhost:${PORT}                    `);
  console.log(`  Routes available:                                       `);
  console.log(`    - GET /             (Interactive HTML UI)             `);
  console.log(`    - GET /api/student  (JSON Student Profile)            `);
  console.log(`    - GET /api/info     (JSON Server Diagnostics)         `);
  console.log(`    - GET /about        (Plain Text Endpoint)             `);
  console.log(`==========================================================`);
});
