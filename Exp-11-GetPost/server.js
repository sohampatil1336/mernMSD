// ============================================================================
// EXPERIMENT 11: EXPRESSJS GET & POST METHODS DEMONSTRATION
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware for parsing URL-encoded bodies (HTML form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing JSON bodies (API / AJAX calls)
app.use(express.json());

// Serve static frontend HTML files
app.use(express.static(path.join(__dirname, "public")));

// In-memory array to store submitted user registrations
const registeredUsers = [
  { id: 1, username: "anuj_powar", email: "anuj@example.com", age: 21, branch: "CSE" },
];

// ============================================================================
// 1. GET METHODS
// ============================================================================

// 1.1 GET: Retrieve all registered users
app.get("/api/users", (req, res) => {
  res.json({
    status: "success",
    count: registeredUsers.length,
    data: registeredUsers,
  });
});

// 1.2 GET with Query Parameters: Search / Filter users (?username=... or ?branch=...)
app.get("/api/search", (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : "";
  console.log(`[GET /api/search] Searching for query: "${query}"`);

  if (!query) {
    return res.json({
      status: "success",
      query: "",
      results: registeredUsers,
    });
  }

  const filtered = registeredUsers.filter(
    (u) =>
      u.username.toLowerCase().includes(query) ||
      u.branch.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query)
  );

  res.json({
    status: "success",
    query: query,
    count: filtered.length,
    results: filtered,
  });
});

// 1.3 GET Form Submission handler
app.get("/submit-get", (req, res) => {
  const { searchKey, filterCategory } = req.query;
  console.log("[GET /submit-get] Received GET Form parameters:", req.query);

  res.send(`
    <html>
      <head><title>GET Method Result</title></head>
      <body style="font-family:sans-serif; max-width:600px; margin:50px auto; padding:20px; border:1px solid #ddd; border-radius:10px;">
        <h2 style="color:#0284c7;">GET Method Form Received!</h2>
        <p>In a <strong>GET</strong> request, form data is appended to the URL as query parameters.</p>
        <div style="background:#f1f5f9; padding:15px; border-radius:6px; font-family:monospace;">
          <p><strong>searchKey:</strong> ${searchKey || "N/A"}</p>
          <p><strong>filterCategory:</strong> ${filterCategory || "N/A"}</p>
          <p><strong>Raw Query String:</strong> ${JSON.stringify(req.query)}</p>
        </div>
        <br/>
        <a href="/" style="display:inline-block; padding:8px 16px; background:#0284c7; color:white; text-decoration:none; border-radius:4px;">Back to Form</a>
      </body>
    </html>
  `);
});

// ============================================================================
// 2. POST METHODS
// ============================================================================

// 2.1 POST Form Submission handler (application/x-www-form-urlencoded)
app.post("/submit-post", (req, res) => {
  const { username, email, age, branch } = req.body;
  console.log("[POST /submit-post] Received POST Form Body:", req.body);

  const newUser = {
    id: registeredUsers.length + 1,
    username: username || "Anonymous",
    email: email || "Not Provided",
    age: Number(age) || 0,
    branch: branch || "CSE",
  };

  registeredUsers.push(newUser);

  res.send(`
    <html>
      <head><title>POST Method Result</title></head>
      <body style="font-family:sans-serif; max-width:600px; margin:50px auto; padding:20px; border:1px solid #10b981; border-radius:10px;">
        <h2 style="color:#10b981;">POST Method Data Submitted!</h2>
        <p>In a <strong>POST</strong> request, data is securely passed inside the HTTP request body (not exposed in the URL).</p>
        <div style="background:#ecfdf5; padding:15px; border-radius:6px; font-family:monospace;">
          <p><strong>ID Assigned:</strong> ${newUser.id}</p>
          <p><strong>Username:</strong> ${newUser.username}</p>
          <p><strong>Email:</strong> ${newUser.email}</p>
          <p><strong>Age:</strong> ${newUser.age}</p>
          <p><strong>Branch:</strong> ${newUser.branch}</p>
        </div>
        <br/>
        <a href="/" style="display:inline-block; padding:8px 16px; background:#10b981; color:white; text-decoration:none; border-radius:4px;">Back to Form</a>
      </body>
    </html>
  `);
});

// 2.2 POST JSON API endpoint (application/json)
app.post("/api/register", (req, res) => {
  const { username, email, age, branch } = req.body;

  if (!username) {
    return res.status(400).json({
      status: "error",
      message: "Username field is required",
    });
  }

  const newUser = {
    id: registeredUsers.length + 1,
    username,
    email: email || "",
    age: age || 0,
    branch: branch || "CSE",
  };

  registeredUsers.push(newUser);

  res.status(201).json({
    status: "success",
    message: "User registered successfully via POST method!",
    user: newUser,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`==========================================================`);
  console.log(`  Express GET & POST Server running on port ${PORT}`);
  console.log(`  Access Frontend: http://localhost:${PORT}`);
  console.log(`==========================================================`);
});
