const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Schema.Types;
let counter = 1;
let PageID = { type: Number, default: () => counter++ };
const schema = new Schema(
  {
    pid: PageID,
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
model
  .find({ pid: { $gt: 0 } })
  .sort({ pid: -1 })
  .then(([first]) => {
    if (first) counter = first.pid + 1;
  });
