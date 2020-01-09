const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;
const schema = new Schema(
  {
    pid: { type: Types.ObjectId },
    title: { type: String },
    description: { type: String },
    layouts: { type: Types.Mixed },
    author: {
      type: Types.ObjectId,
      ref: "user"
    },
    isPublish: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);
const model = mongoose.model("page", schema);
module.exports = model;
