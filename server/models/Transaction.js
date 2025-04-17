const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
