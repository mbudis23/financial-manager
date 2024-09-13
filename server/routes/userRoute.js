const express = require('express');
const { registerUser, loginUser, updateUser, resetPassword } = require('../controllers/userController');
const { authenticateToken } = require('../middlewares/userMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.put('/reset-password', authenticateToken, resetPassword);

module.exports = router;
