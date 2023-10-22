const mongoose = require("mongoose");
const { DB_URL } = process.env;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!!!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(DB_URL);
}

module.exports = mongoConnect;
