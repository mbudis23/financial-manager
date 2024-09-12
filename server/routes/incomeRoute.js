const express = require('express');
const { addIncome } = require('../controllers/incomeController');
const router = express.Router();

router.post('/add', addIncome);

module.exports = router;