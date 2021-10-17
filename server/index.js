const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

//.env File
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Succeeded"))
  .catch((e) => console.log("Error: " + e));

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server Running on Port " + process.env.PORT);
});
