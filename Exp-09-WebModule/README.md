# Experiment 9: Demonstrating NodeJS Web Module

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To demonstrate the **Node.js Web Module architecture**, implementing an HTTP Web Server (`http.createServer`) and an HTTP Web Client (`http.request`), alongside related Node.js streaming and networking modules (`readable`, `writable`, `pipe`, `chain`, `net`, `dns`, `os`, `path`).

---

## 📑 Theoretical Background

### What is the Web Module in Node.js?
A web server is a software system that processes network requests via the Hypertext Transfer Protocol (HTTP). The Node.js Web Module consists of:
1. **Client Tier:** Browsers or HTTP client programs that generate HTTP requests.
2. **Server Tier:** An application listening on a specific network port that parses requests, reads requested resources from disk or databases, and sends HTTP responses (HTML, CSS, JSON, images).

### Core Components:
- **`http.createServer(callback)`:** Creates a native HTTP web server.
- **`req` (IncomingMessage):** Represents the request stream from the client (`url`, `method`, `headers`).
- **`res` (ServerResponse):** Represents the response stream to the client (`writeHead()`, `write()`, `end()`).
- **`http.request(options, callback)`:** Creates an outgoing HTTP request acting as a client.

---

## 📁 Files Included

- `server.js`: Web Server serving `index.html` on port 8081.
- `client.js`: HTTP Web Client program querying `server.js`.
- `index.html`: Web page served by the server.
- `readable.js` & `writable.js`: Demonstrates stream data chunking.
- `pipe.js`: Pipes readable stream directly into writable stream.
- `chain.js`: Chains zlib compression into file streams.
- `netserver.js` & `netclient.js`: Low-level TCP socket networking.
- `dns.js`: Domain Name System lookups.
- `os.js`: Operating system metrics.
- `path.js`: File path manipulation.

---

## 🚀 How to Run Locally

### 1. Start the Web Server:
```bash
cd Exp-09-Demonstrating-NodeJS-Web-Module
node server.js
```
The server will start listening at: `http://localhost:8081`

### 2. View in Browser:
Open [http://localhost:8081](http://localhost:8081) in any web browser.

### 3. Run the Web Client:
In another terminal:
```bash
node client.js
```
*(The client will connect, download `index.html`, and display status and content in the terminal!)*
