# Experiment 10: ExpressJS Request & Response

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design and develop an **Express.js web application demonstrating the Request (`req`) and Response (`res`) objects**, inspecting client headers, parameters, query strings, and utilizing various response methods (`res.send()`, `res.json()`, `res.status()`).

---

## 📑 Theoretical Background

### 1. Express Request Object (`req`)
The `req` object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more:
- `req.query`: An object containing property for each query string parameter in the route (e.g., `?name=Anuj`).
- `req.params`: An object containing properties mapped to the named route "parameters" (e.g., `/user/:id`).
- `req.body`: Contains key-value pairs of data submitted in the request body (parsed by `express.json()` or `express.urlencoded()`).
- `req.headers`: Header object sent by the client.
- `req.path` & `req.originalUrl`: Returns path part of request URL.
- `req.method`: Contains a string corresponding to HTTP method (`GET`, `POST`, etc.).
- `req.ip`: Client IP address.

### 2. Express Response Object (`res`)
The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request:
- `res.send([body])`: Sends the HTTP response (HTML string, Buffer, Object, or Array).
- `res.json([body])`: Sends a JSON response with proper `Content-Type: application/json` header.
- `res.status(code)`: Sets the HTTP status code for the response (e.g., 200, 201, 404, 500).
- `res.sendStatus(code)`: Sets the status and sends its string representation as the response body.
- `res.redirect([status,] path)`: Redirects to the specified URL.

---

## 📁 Files Included

- `server.js`: Comprehensive server demonstrating all Request and Response features.
- `exp.js`: Basic Express server.
- `exp1.js`: Request object demonstration (`req.app`).
- `exp2.js`: Response object demonstration (`res.app`).
- `exp3.js`: Route handling (`/`, `/hi`, `/welcome`).
- `exp4.js`: `app.all()` method demonstration.
- `package.json`: NPM package configuration.

---

## 🚀 How to Run Locally

1. Navigate to this folder:
   ```bash
   cd Exp-10-ExpressJS-Request-and-Response
   ```

2. Start the comprehensive server:
   ```bash
   node server.js
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the endpoints.

*(You can also run any individual experiment file: `node exp.js`, `node exp1.js`, etc.)*
