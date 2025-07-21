const express = require('express');
const router = express.Router();
const { getMessages } = require('../controllers/messageController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/:room', verifyToken, getMessages);

module.exports = router; 