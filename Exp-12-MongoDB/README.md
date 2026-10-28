# Experiment 12: Application that Demonstrates MongoDB

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To design and implement a full-stack **Node.js, Express.js, and MongoDB (Mongoose ODM)** application demonstrating the complete set of **CRUD operations** (Create, Read, Update, Delete) on database documents.

---

## 📑 Theoretical Background

### What is MongoDB?
MongoDB is a source-available, cross-platform, document-oriented NoSQL database. It replaces traditional table-based relational structures with flexible documents formatted as **BSON** (Binary JSON).

### Key Concepts:
1. **Document:** The basic unit of data in MongoDB, composed of field-value pairs (equivalent to a row in SQL).
2. **Collection:** A grouping of MongoDB documents (equivalent to an RDBMS table).
3. **Mongoose ODM:** An Object Data Modeling library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and representation in MongoDB.
4. **CRUD Operations:**
   - **Create:** `Student.create({...})` / `new Student({...}).save()`
   - **Read:** `Student.find()` / `Student.findOne({ rollNo: ... })`
   - **Update:** `Student.findOneAndUpdate({ rollNo: ... }, { ... }, { new: true })`
   - **Delete:** `Student.findOneAndDelete({ rollNo: ... })`

---

## 📁 Files Included

- `db.js`: MongoDB connection module using Mongoose.
- `models/Student.js`: Mongoose Schema & Model definition.
- `crud-demo.js`: Standalone CLI execution script performing all 4 CRUD operations with terminal output.
- `server.js`: Express REST API serving CRUD endpoints.
- `public/index.html`: Interactive web interface for adding, editing, viewing, and deleting student records.
- `package.json`: Dependencies (`express`, `mongoose`, `cors`).

---

## 🚀 How to Run Locally

### Option 1: Run the Terminal CLI Demo
```bash
cd Exp-12-Appln-that-demonstrates-MongoDB
npm install
node crud-demo.js
```

### Option 2: Run the Web Server and Interactive UI
```bash
cd Exp-12-Appln-that-demonstrates-MongoDB
node server.js
```
Open [http://localhost:5000](http://localhost:5000) in your browser.
*(If a local MongoDB daemon is running, records will persist directly in the `msd_practicals` database. If MongoDB is offline, an in-memory fallback simulation handles your requests!)*
