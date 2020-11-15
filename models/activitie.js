const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const activitieSchema = mongoose.Schema({
  name: String,
  description: String,
  coutmaindoeuvre: String,
  superficie: String,
  frequence: String,
  periode: String,
  besoinMateriel: String,
  coutMateriel: String,
  statutsexecutant: String,
  executant: String,
  firebaseAdd: Boolean,
});

module.exports = mongoose.model("Activity", activitieSchema);
