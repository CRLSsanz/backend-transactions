const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    email: { type: String, required: true },
    type: { type: String, required: true },
    account: { type: String, required: true },
    category: { type: String, required: true },
    total: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
