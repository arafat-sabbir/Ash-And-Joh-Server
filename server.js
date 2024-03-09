const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const baseRoute = require("./app")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //needed for json data
//for communicating with frontend
var corsOptions = {
  origin: "*",
};

//base routes
app.use("/api/v1", baseRoute);

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // to check connection successful or not
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
