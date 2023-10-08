const express = require("express");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();
const serveDirectory = path.join(__dirname, "..", "public");

// Cross Origin Communication
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json()); // middleware to parse JSON
app.use(express.static(serveDirectory)); // middleware to serve frontend
app.use(planetsRouter);

// root router
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
