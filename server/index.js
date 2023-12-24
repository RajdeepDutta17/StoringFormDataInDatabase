const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const formRoute = require("./routes/form");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", formRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log(`Database Connected`);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
