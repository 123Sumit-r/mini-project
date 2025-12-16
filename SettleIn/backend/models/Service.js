const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  type: String, // hostel, laundry, gym etc
  location: String,
  price: String,
  owner: String
});

module.exports = mongoose.model("Service", serviceSchema);
