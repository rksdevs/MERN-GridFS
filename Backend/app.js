var express = require("express");
var path = require("path");
const authRouter = require("./routes/auth.route");
const fileRouter = require("./routes/file.route");
const db = require("./config/db");
const cors = require("cors");

var logger = require("morgan");

var app = express();

// app.use(cors());
app.use(logger("dev"));
app.use(express.json());

db();

app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

// error handler
app.use(function (req, res) {
  res.status(400).send("Error to route");
});

module.exports = app;
