const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../src/config/db");
const counterRoutes = require("../src/routes/counterRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/counter", counterRoutes);

// Export handler for Vercel serverless
module.exports = app;
