const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../src/config/db");
const counterRoutes = require("../src/routes/counterRoutes");


const corsOptions = {
    origin: 'https://frontend-taupe-rho-50.vercel.app/', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};


dotenv.config();
connectDB();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/api/counter", counterRoutes);

// Export handler for Vercel serverless
module.exports = app;
