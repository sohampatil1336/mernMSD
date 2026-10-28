let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  mongoose = null;
}

let Student;

if (mongoose) {
  const studentSchema = new mongoose.Schema(
    {
      rollNo: {
        type: Number,
        required: [true, "Roll Number is required"],
        unique: true,
        min: 1,
      },
      name: {
        type: String,
        required: [true, "Student name is required"],
        trim: true,
      },
      branch: {
        type: String,
        default: "Computer Science & Engineering",
      },
      year: {
        type: String,
        default: "B.Tech",
      },
      email: {
        type: String,
        required: [true, "Email address is required"],
        lowercase: true,
        trim: true,
      },
      marks: {
        type: Number,
        default: 85,
        min: 0,
        max: 100,
      },
    },
    {
      timestamps: true,
    }
  );

  Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
} else {
  Student = class MockStudent {
    constructor(data) {
      Object.assign(this, data);
    }
  };
}

module.exports = Student;
