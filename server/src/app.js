const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const v1 = require("./routes/version1");

const app = express();

// Cross Origin Communication
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json()); // middleware to parse JSON
app.use(express.static(path.join(__dirname, "..", "public"))); // middleware to serve frontend

app.use("/v1", v1); // v1 api calls
// root router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
