const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRoute = require("./routes/UserRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/jiet", {
    useunifiedTopology: true,
    useNewUrlparser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
});

app.use(userRoute);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`my server is running on port: ${PORT}`);
});