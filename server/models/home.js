const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    userName: String,
    age: Number,
    sex: String,
    height: String
  },
  {
    timestamps: true
  }
);
const model = mongoose.model("user", schema);
module.exports = model;
