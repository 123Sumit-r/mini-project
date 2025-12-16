const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend")));

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Start server
app.listen(5000, () => {
  console.log("Server running on 5000");
});
