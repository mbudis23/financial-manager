const express = require('express');
const { createAccount, updateAccount, deleteAccount, getAllAccounts, getAccount } = require('../controllers/accountController');
const { authenticateToken } = require('../middlewares/userMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createAccount);
router.put('/', authenticateToken, updateAccount);
router.delete('/:id', authenticateToken, deleteAccount);
router.get('/', authenticateToken, getAllAccounts);
router.get('/:id', authenticateToken, getAccount);

module.exports = router;
