// Routes setup
const express= require('express')
const app=express()
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new transaction
router.post('/', async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Edit transaction
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedTransaction = await Transaction.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedTransaction) return res.status(404).json({ message: 'Transaction not found' });
//     res.json(updatedTransaction);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// Get transaction by id
router.get('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit Update transaction
router.put('/:id', async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Delete transaction
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Use the router
app.use('/api/transactions', router);
// Export the router so it can be used in other files
module.exports = router;