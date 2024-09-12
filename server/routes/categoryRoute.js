const express = require('express');
const { createCategory } = require('../controllers/categoryCOntroller');
const router = express.Router();

router.post('create', createCategory);

module.exports = router;