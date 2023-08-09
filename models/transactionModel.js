const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    category: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
    total: { type: Number, required: true },
    type: { type: String, required: true },
    account: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
