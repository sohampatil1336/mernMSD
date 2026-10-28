// ============================================================================
// EXPERIMENT 10: EXPRESSJS REQUEST & RESPONSE COMPREHENSIVE SERVER
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Root Route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Exp 10: ExpressJS Request & Response</title></head>
      <body style="font-family:sans-serif; max-width:800px; margin:40px auto; padding:20px; line-height:1.6;">
        <h1 style="color:#0284c7;">Experiment 10: ExpressJS Request & Response</h1>
        <p><strong>Student:</strong> Anuj Arun Powar | <strong>Roll No:</strong> 13 | <strong>DYPCET</strong></p>
        <hr/>
        <h3>Test Endpoints:</h3>
        <ul>
          <li><a href="/request-demo?name=Anuj&subject=MSD">1. Request Object Demo (/request-demo?name=Anuj&subject=MSD)</a></li>
          <li><a href="/user/13">2. Route Parameters (/user/13)</a></li>
          <li><a href="/response-json">3. Response JSON Demo (/response-json)</a></li>
          <li><a href="/response-status">4. Response Status Code Demo (/response-status)</a></li>
          <li><a href="/hi">5. Route Handling (/hi)</a></li>
          <li><a href="/welcome">6. Route Handling (/welcome)</a></li>
        </ul>
      </body>
    </html>
  `);
});

// 2. Request Object Properties Demonstration (req)
app.get("/request-demo", (req, res) => {
  const reqDetails = {
    title: "Express Request Object (req) Properties",
    originalUrl: req.originalUrl,
    path: req.path,
    method: req.method,
    hostname: req.hostname,
    ip: req.ip,
    protocol: req.protocol,
    queryParameters: req.query,
    userAgent: req.get("User-Agent"),
    headers: req.headers,
  };

  console.log("\n--- REQUEST OBJECT PROPERTIES INSPECTED ---");
  console.log(reqDetails);

  res.json(reqDetails);
});

// 3. Route Parameters (req.params)
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `Received Route Parameter for User ID: ${userId}`,
    userId: userId,
    student: "Anuj Arun Powar",
    rollNo: 13,
  });
});

// 4. Response JSON Method (res.json)
app.get("/response-json", (req, res) => {
  res.json({
    status: "success",
    code: 200,
    data: {
      message: "This response was sent using res.json() method",
      format: "JavaScript Object Notation",
    },
  });
});

// 5. Response Status Code Method (res.status)
app.get("/response-status", (req, res) => {
  res.status(201).json({
    statusCode: 201,
    statusText: "Created",
    message: "Resource creation simulated successfully using res.status(201)",
  });
});

// 6. User's existing individual routes
app.get("/hi", (req, res) => {
  res.send("Hi from Express.js!");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to MERN Stack Development (MSD)!");
});

// 7. Handling all HTTP methods using app.all
app.all("/all-methods", (req, res) => {
  res.send(`Handled ${req.method} request using app.all()`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`==========================================================`);
  console.log(`  Express Request & Response Server running on port ${PORT}`);
  console.log(`  Open: http://localhost:${PORT}                           `);
  console.log(`==========================================================`);
});
