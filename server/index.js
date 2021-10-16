const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//.env File
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Succeeded"))
  .catch((e) => console.log("Error: " + e));

app.get("/api/test", () => {
  console.log("Get Request sent Successfully");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server Running on Port " + process.env.PORT);
});
