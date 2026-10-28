let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  mongoose = null;
}

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/msd_practicals";

const connectDB = async () => {
  if (!mongoose) {
    console.warn("⚠️  Notice: 'mongoose' package is not yet installed in node_modules.");
    console.warn("   Run 'npm install' to connect to live MongoDB.");
    return false;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log(` MongoDB Connected Successfully: ${conn.connection.host}/${conn.connection.name}`);
    return true;
  } catch (err) {
    console.warn(`⚠️  MongoDB Connection Notice: ${err.message}`);
    console.warn(`   (If local MongoDB is not running, fallback in-memory mode will handle requests)`);
    return false;
  }
};

module.exports = { connectDB, MONGO_URI, mongoose };
