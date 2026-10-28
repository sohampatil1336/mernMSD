# Experiment 8: Demonstrating NodeJS File System

**Subject:** MERN Stack Development (MSD)  
**Academic Year:** 2026-27  
**Department:** Computer Science & Engineering  
**Institute:** D. Y. Patil College of Engineering & Technology, Kolhapur  

---

## 🎯 Aim / Objective
To demonstrate the capabilities of the Node.js **File System (`fs`) module** for creating, opening, reading, appending, and listing files and directories, as well as accessing process diagnostics using the global `process` object.

---

## 📑 Theoretical Background

The Node.js `fs` (File System) module provides an API for interacting with the file system. It offers both asynchronous (callback / Promise-based) and synchronous versions for file operations.

### Demonstrated File System Operations:

1. **Write / Create File (`fs.writeFileSync`)**
   - Synchronously writes data to a file, creating it if it does not already exist:
     ```javascript
     fs.writeFileSync("data.txt", "Hello from Node.js!");
     ```

2. **Open File (`fs.open`)**
   - Asynchronously opens a file with specified flags (`'r'` for read, `'w'` for write, `'a'` for append):
     ```javascript
     fs.open("data.txt", "r", (err, fileDescriptor) => { ... });
     ```

3. **Read File (`fs.readFile`)**
   - Asynchronously reads the entire contents of a file in the specified character encoding:
     ```javascript
     fs.readFile("data.txt", "utf8", (err, data) => { ... });
     ```

4. **Append Data (`fs.appendFile`)**
   - Asynchronously appends data to a file. If the file doesn't exist, it is created:
     ```javascript
     fs.appendFile("data.txt", "\nWelcome to MERN Stack!", (err) => { ... });
     ```

5. **Directory Creation (`fs.mkdirSync` / `fs.existsSync`)**
   - Verifies if a folder exists and creates a new directory synchronously:
     ```javascript
     if (!fs.existsSync("myfolder")) {
       fs.mkdirSync("myfolder");
     }
     ```

6. **Read Directory (`fs.readdir`)**
   - Reads the names of files and directories within a directory:
     ```javascript
     fs.readdir(".", (err, files) => { ... });
     ```

7. **Process Object Diagnostics (`process`)**
   - Accesses runtime environment data:
     - `process.version`: Node.js engine version
     - `process.platform`: OS platform (`win32`, `linux`, `darwin`)
     - `process.pid`: OS Process Identifier
     - `process.cwd()`: Current working directory
     - `process.argv`: CLI arguments array
     - `process.env`: Environment variables (e.g., `PORT`)

---

## 📁 Files Included

- `server.js`: Complete Node.js script demonstrating all 7 FS operations.
- `data.txt`: Data file generated and modified by the script.
- `package.json`: NPM manifest.

---

## 🚀 How to Run Locally

```bash
cd Exp-08-Demonstrating-NodeJS-File-System
node server.js
```
