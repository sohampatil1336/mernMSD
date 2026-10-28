# Experiment 6: Console & Web Based NodeJS Application

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design, write, and execute:
1. A **Console-based Node.js Application** demonstrating terminal I/O, formatting (`console.table`), process arguments (`process.argv`), timing benchmarks, and system metrics.
2. A **Web-based Node.js Application** using the built-in `http` module (`http.createServer`) to handle routing, serve HTML documents, and return JSON API responses.

---

## 📑 Theoretical Background

### 1. Console Application in Node.js
- Node.js provides global `console` and `process` objects.
- `console.log()`, `console.info()`, `console.warn()`, `console.error()`.
- `console.table()`: Renders tabular data directly to the terminal.
- `console.time(label)` / `console.timeEnd(label)`: Measures exact code execution duration.
- `process.argv`: An array containing command-line arguments passed when launching the Node.js process.
- `readline`: Built-in module for interactive prompt-and-response in the terminal.

### 2. Web-based Application using `http` Module
- Node.js includes a native `http` module requiring no external libraries.
- `http.createServer((req, res) => { ... })`: Instantiates an HTTP server listening on a TCP port.
- `req.url` & `req.method`: Inspects incoming route and HTTP verb.
- `res.writeHead(statusCode, headers)`: Sets response status and MIME types (`text/html`, `application/json`).
- `res.end(data)`: Finalizes and dispatches the HTTP response stream.

---

## 🚀 How to Run Locally

### Run Console Application:
```bash
cd Exp-06-Console-and-Web-based-NodeJS-Appln
node console-app.js
```
*(Optionally pass arguments: `node console-app.js roll13 Anuj`)*

### Run Web Application:
```bash
cd Exp-06-Console-and-Web-based-NodeJS-Appln
node web-app.js
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.
