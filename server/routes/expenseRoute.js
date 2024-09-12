const express = require('express');
const { addExpense } = require('../controllers/expenseController');
const router = express.Router();

router.post('add', addExpense);

module.exports = router;
