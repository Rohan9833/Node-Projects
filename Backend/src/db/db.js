const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.Database_url);
    console.log("connected to DB");
  } catch (error) {
    console.error("Database Connection error",error);
  }
}

module.exports = connectDB;
