const Transaction = require("../models/transactionModel");

// list all expenses
const getTransactions = (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.json({ message: err }));
};

// list one expense
const getTransaction = (req, res) => {
  const { id } = req.params;
  Transaction.findById({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
};

// list one expense
const getTransactionsByEmail = (req, res) => {
  const { email } = req.params;
  Transaction.find({ email: email })
    .sort({ date: -1 })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
};

// create new expense con validacion (llamar variables)
const createTransactionVal = async (req, res) => {
  /*exports.createTour = async (req, res) => {
    // method 1
    const newTour = await Tour.create(req.body);
  
    // method 2
    const newTour = new Tour(req.body);
    await newTour.save();
  }*/
  const { category, comment, date, total, type, account } = req.body;
  //add doc to db
  try {
    const transact = await Transaction.create({
      category,
      comment,
      date,
      total,
      type,
      account,
    });
    res.status(200).json(transact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create new expense
const createTransaction = (req, res) => {
  Transaction.create({ ...req.body })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
};

// update one expense con validacion (llamar variables)
const updateTransactionVal = async (req, res) => {
  const { id } = req.params;
  const { category, comment, date, total, type, account } = req.body;
  //add doc to db
  try {
    const transact = await Transaction.updateOne(
      // findOneAndUpdate (devuelve el doc antes de actualizalo) - updateOne(devuelve solo true)
      { _id: id },
      {
        category,
        comment,
        date,
        total,
        type,
        account,
      }
    );
    res.status(200).json(transact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update one expense
const updateTransaction = (req, res) => {
  const { id } = req.params;
  Transaction.updateOne({ _id: id }, { ...req.body })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
};

// delete one expense
const deleteTransaction = (req, res) => {
  const { id } = req.params;
  Transaction.findOneAndDelete({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
};

module.exports = {
  getTransactions,
  //getTransaction,
  getTransactionsByEmail,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
