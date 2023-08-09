const {
  getTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controllers/transactionCtrl");

const express = require("express");
const router = express.Router();

// GET all expenses
router.get("/", getTransactions);
// GET a single expense
router.get("/:id", getTransaction);
// POST a new expense
router.post("/", createTransaction);
// DELETE a expense
router.delete("/:id", deleteTransaction);
// UPDATE a expense
router.patch("/:id", updateTransaction);
/* UPDATE a expense
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a expense" });
}); */

module.exports = router;
