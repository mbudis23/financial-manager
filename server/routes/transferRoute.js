const express = require('express');
const { addTransfer } = require('../controllers/transferController');
const router = express.Router();

router.post('/add', addTransfer);

module.exports = router;