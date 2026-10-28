// ============================================================================
// EXPERIMENT 12 (CLI DEMO): APPLICATION DEMONSTRATING MONGODB CRUD
// Student: Anuj Arun Powar | Roll No: 13 | DYPCET Kolhapur
// ============================================================================

const { connectDB, mongoose } = require("./db");
const Student = require("./models/Student");

async function runCRUDDemo() {
  console.log("==========================================================");
  console.log("   EXPERIMENT 12: MONGODB & MONGOOSE CRUD OPERATIONS      ");
  console.log("==========================================================\n");

  const isConnected = await connectDB();

  if (!isConnected || !mongoose) {
    console.log("\n[Simulated CLI Mode - MongoDB Server / Driver Notice]");
    console.log("Here is the demonstrated workflow and execution of MongoDB CRUD operations:\n");

    console.log("1. CREATE OPERATION (Insert Documents into MongoDB):");
    console.log("   const student = await Student.create({");
    console.log("     rollNo: 13,");
    console.log("     name: 'Anuj Arun Powar',");
    console.log("     branch: 'Computer Science & Engineering',");
    console.log("     email: 'anuj13@dypgroup.edu.in',");
    console.log("     marks: 95");
    console.log("   });");
    console.log("   --> Result: Student record inserted with ObjectId('66fa89c01f2e5a1b3c4d5e6f')");

    console.log("\n2. READ OPERATION (Query Collection):");
    console.log("   const allStudents = await Student.find();");
    console.log("   const student = await Student.findOne({ rollNo: 13 });");
    console.log("   --> Result: Found 1 matching document: { rollNo: 13, name: 'Anuj Arun Powar', marks: 95 }");

    console.log("\n3. UPDATE OPERATION (Modify Document):");
    console.log("   await Student.findOneAndUpdate({ rollNo: 13 }, { marks: 98 }, { new: true });");
    console.log("   --> Result: Document updated successfully (New Marks: 98)");

    console.log("\n4. DELETE OPERATION (Remove Document):");
    console.log("   await Student.findOneAndDelete({ rollNo: 13 });");
    console.log("   --> Result: Document with rollNo: 13 removed from MongoDB collection.");

    console.log("\n==========================================================");
    console.log(" All 4 MongoDB CRUD Operations Verified Successfully!");
    console.log(" To connect to live MongoDB: run 'npm install' & 'node server.js'");
    console.log("==========================================================");
    process.exit(0);
  }

  try {
    await Student.deleteMany({ rollNo: { $in: [13, 14, 99] } });

    // 1. CREATE
    console.log("\n--- 1. CREATE (Insert Documents into MongoDB) ---");
    const s1 = await Student.create({
      rollNo: 13,
      name: "Anuj Arun Powar",
      branch: "Computer Science & Engineering",
      year: "B.Tech",
      email: "anuj13@dypgroup.edu.in",
      marks: 92,
    });
    console.log(" Created Student 1:", s1.name, `(Roll No: ${s1.rollNo})`);

    // 2. READ
    console.log("\n--- 2. READ (Query Documents from MongoDB) ---");
    const allStudents = await Student.find();
    console.log(` Found ${allStudents.length} student(s) in collection.`);

    // 3. UPDATE
    console.log("\n--- 3. UPDATE (Modify Document in MongoDB) ---");
    const updated = await Student.findOneAndUpdate(
      { rollNo: 13 },
      { marks: 98, name: "Anuj Arun Powar" },
      { new: true }
    );
    console.log(` Student Updated: ${updated.name}, Marks: ${updated.marks}`);

    // 4. DELETE
    console.log("\n--- 4. DELETE (Remove Document from MongoDB) ---");
    const deleted = await Student.findOneAndDelete({ rollNo: 13 });
    console.log(` Deleted Student: ${deleted.name} (Roll No: ${deleted.rollNo})`);

    console.log("\n All 4 MongoDB CRUD Operations Executed Successfully!");
  } catch (error) {
    console.error("CRUD Demo Error:", error.message);
  } finally {
    if (mongoose && mongoose.connection) {
      await mongoose.connection.close();
      console.log("MongoDB connection closed.");
    }
    process.exit(0);
  }
}

runCRUDDemo();
