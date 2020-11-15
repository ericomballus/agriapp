const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const activitieRoutes = require("./routes/activities");
const materielRoutes = require("./routes/materiels");

let uri = "mongodb://foo:bar@localhost/admin?authSource=admin";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose.connect(uri, options, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to MongoDB OK");
  }
});
mongoose.connection.on("error", (err) => {
  console.log("il ya erreur ====>");
  console.log(err);
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//app.use(validator())
app.use(cors());

app.use("/", express.static("www"));
app.use("/uploads", express.static("uploads/lena"));

app.use((req, res, next) => {
  // console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, mimeType, Accept, Authorization'
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET,OPTIONS"
    );
    return res.status(202).json({});
  }
  next();
});
const port = 3000;
app.use("/activities", activitieRoutes);
app.use("/materiel", materielRoutes);
app.get("/mballus", (req, res) => {
  res.send("Hello World!");
  console.log("hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Routes which should handle requests

module.exports = app;
