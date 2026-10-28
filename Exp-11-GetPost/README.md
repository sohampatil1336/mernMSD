# Experiment 11: ExpressJS GET & POST Methods

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design and implement an **Express.js application handling HTTP GET and POST methods**, processing URL query strings, parsing URL-encoded HTML form bodies, handling JSON payloads, and understanding the differences between GET and POST in web communication.

---

## 📑 Theoretical Background

### HTTP GET vs HTTP POST:

| Criterion | HTTP GET | HTTP POST |
| :--- | :--- | :--- |
| **Data Transmission** | Appended to URL as query string (`?key=value`) | Carried inside the HTTP request body |
| **Security** | Not secure for passwords or sensitive data (visible in browser history, bookmarks, logs) | Secure for sensitive data (payload not exposed in URL) |
| **Data Size Limit** | Restricted by maximum URL length (~2048 characters) | No strict limit (can upload files, large JSON payloads) |
| **Idempotency** | Idempotent (multiple identical requests have same effect) | Non-idempotent (submitting creates new records) |
| **Caching & Bookmarking** | Can be cached and bookmarked | Cannot be bookmarked, rarely cached |
| **Express Middleware** | Accessible via `req.query` (no body parser needed) | Requires `express.urlencoded()` or `express.json()` to parse `req.body` |

### Express Middleware Required for POST:
```javascript
// 1. For HTML form submissions:
app.use(express.urlencoded({ extended: true }));

// 2. For JSON REST API payloads:
app.use(express.json());
```

---

## 🚀 How to Run Locally

1. Navigate to this folder:
   ```bash
   cd Exp-11-ExpressJS-GET-and-POST
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start server:
   ```bash
   node server.js
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to interact with both GET and POST forms.
