// ============================================================================
// EXPERIMENT 12 (EXPRESS + MONGODB SERVER): REST API FOR CRUD OPERATIONS
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const express = require("express");
const path = require("path");
const cors = require("cors");
const { connectDB } = require("./db");
const Student = require("./models/Student");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let isMongoLive = false;

// In-memory fallback dataset in case local MongoDB is offline
let fallbackStudents = [
  {
    rollNo: 13,
    name: "Anuj Arun Powar",
    branch: "Computer Science & Engineering",
    year: "B.Tech",
    email: "anuj13@dypgroup.edu.in",
    marks: 95,
  },
  {
    rollNo: 14,
    name: "Rahul Patil",
    branch: "Computer Science & Engineering",
    year: "B.Tech",
    email: "rahul@dypgroup.edu.in",
    marks: 88,
  },
];

// 1. GET ALL STUDENTS (READ)
app.get("/api/students", async (req, res) => {
  try {
    if (isMongoLive) {
      const students = await Student.find().sort({ rollNo: 1 });
      return res.json({ status: "success", source: "MongoDB", data: students });
    }
    return res.json({ status: "success", source: "In-Memory Simulation", data: fallbackStudents });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// 2. GET SINGLE STUDENT (READ BY ROLL NO)
app.get("/api/students/:rollNo", async (req, res) => {
  const roll = Number(req.params.rollNo);
  try {
    if (isMongoLive) {
      const student = await Student.findOne({ rollNo: roll });
      if (!student) return res.status(404).json({ message: "Student not found in MongoDB" });
      return res.json({ status: "success", data: student });
    }
    const student = fallbackStudents.find((s) => s.rollNo === roll);
    if (!student) return res.status(404).json({ message: "Student not found" });
    return res.json({ status: "success", data: student });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// 3. CREATE NEW STUDENT (CREATE)
app.post("/api/students", async (req, res) => {
  const { rollNo, name, branch, year, email, marks } = req.body;

  if (!rollNo || !name || !email) {
    return res.status(400).json({ status: "error", message: "rollNo, name, and email are required" });
  }

  try {
    if (isMongoLive) {
      const newStudent = await Student.create({
        rollNo: Number(rollNo),
        name,
        branch: branch || "Computer Science & Engineering",
        year: year || "B.Tech",
        email,
        marks: Number(marks) || 0,
      });
      return res.status(201).json({ status: "success", message: "Student created in MongoDB", data: newStudent });
    }

    const newStudent = {
      rollNo: Number(rollNo),
      name,
      branch: branch || "Computer Science & Engineering",
      year: year || "B.Tech",
      email,
      marks: Number(marks) || 0,
    };
    fallbackStudents.push(newStudent);
    return res.status(201).json({ status: "success", message: "Student created successfully", data: newStudent });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
});

// 4. UPDATE STUDENT (UPDATE)
app.put("/api/students/:rollNo", async (req, res) => {
  const roll = Number(req.params.rollNo);
  const { name, branch, year, email, marks } = req.body;

  try {
    if (isMongoLive) {
      const updated = await Student.findOneAndUpdate(
        { rollNo: roll },
        { name, branch, year, email, marks },
        { new: true, runValidators: true }
      );
      if (!updated) return res.status(404).json({ message: "Student not found in MongoDB" });
      return res.json({ status: "success", message: "Student updated in MongoDB", data: updated });
    }

    const index = fallbackStudents.findIndex((s) => s.rollNo === roll);
    if (index === -1) return res.status(404).json({ message: "Student not found" });

    fallbackStudents[index] = { ...fallbackStudents[index], ...req.body, rollNo: roll };
    return res.json({ status: "success", message: "Student updated successfully", data: fallbackStudents[index] });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
});

// 5. DELETE STUDENT (DELETE)
app.delete("/api/students/:rollNo", async (req, res) => {
  const roll = Number(req.params.rollNo);

  try {
    if (isMongoLive) {
      const deleted = await Student.findOneAndDelete({ rollNo: roll });
      if (!deleted) return res.status(404).json({ message: "Student not found in MongoDB" });
      return res.json({ status: "success", message: "Student deleted from MongoDB", data: deleted });
    }

    const index = fallbackStudents.findIndex((s) => s.rollNo === roll);
    if (index === -1) return res.status(404).json({ message: "Student not found" });

    const deleted = fallbackStudents.splice(index, 1);
    return res.json({ status: "success", message: "Student deleted successfully", data: deleted[0] });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

// Start Express Server & Connect DB
app.listen(PORT, async () => {
  isMongoLive = await connectDB();
  console.log(`==========================================================`);
  console.log(`  MongoDB Application Server running on port ${PORT}      `);
  console.log(`  Access Web UI: http://localhost:${PORT}                 `);
  console.log(`  Storage Engine: ${isMongoLive ? "MongoDB Database" : "In-Memory Fallback"} `);
  console.log(`==========================================================`);
});
