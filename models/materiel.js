const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const materielSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  firebaseAdd: Boolean,
  display: { type: Boolean, default: true },
});

module.exports = mongoose.model("Materiel", materielSchema);
