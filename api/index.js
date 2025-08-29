const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../src/config/db");
const counterRoutes = require("../src/routes/counterRoutes");

// Load env vars
dotenv.config();
connectDB();

// Create express app
const app = express();

// CORS setup (important for Vercel frontend ↔ backend)
app.use(cors({ origin: "*" }));

app.use(express.json());

// Routes
app.use("/api/counter", counterRoutes);

// Instead of exporting app directly, wrap it for Vercel
const serverless = require("serverless-http");
module.exports = serverless(app);
