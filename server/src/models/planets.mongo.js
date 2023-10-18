const mongoose = require("mongoose");

const planetSchema = mongoose.Schema({
  keplerName: {
    type: String,
    default: true,
  },
});

module.exports = mongoose.model("Planet", planetSchema);
