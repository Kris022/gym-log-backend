require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const pathLogger = require("./middleware/pathLogger");

const workoutsRoutes = require("./routes/workouts");

const app = express();

// Middleware
app.use(pathLogger);

// Routes
app.use("/api/workouts/", workoutsRoutes);
// user route

// Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database.");

    // Start server
    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });
    
  })
  .catch((error) => {
    console.log(error);
  });
