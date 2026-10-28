// ============================================================================
// EXPERIMENT 9 (WEB CLIENT): DEMONSTRATING NODE.JS WEB MODULE (HTTP CLIENT)
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const http = require("http");

// Options for HTTP request to our server.js (port 8081)
const options = {
  host: "localhost",
  port: "8081",
  path: "/index.html",
  method: "GET",
};

console.log("Connecting to Web Server at http://localhost:8081/index.html...");

const callback = function (response) {
  let body = "";

  console.log(`Response Status Code: ${response.statusCode}`);
  console.log("Response Headers:", response.headers);

  // Read response chunks
  response.on("data", function (chunk) {
    body += chunk;
  });

  // End of response
  response.on("end", function () {
    console.log("\n=================== RECEIVED WEB CONTENT ===================");
    console.log(body);
    console.log("============================================================\n");
    console.log("Web Module Client Request completed successfully!");
  });
};

const req = http.request(options, callback);

req.on("error", function (err) {
  console.error("HTTP Request Error:", err.message);
  console.log("Tip: Ensure the web server is running first using: node server.js");
});

req.end();
