// routes/authRoutes.js
const express = require('express');
const { registerUser, authUser } = require('../controllers/authController'); // Make sure the path is correct
const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', authUser);

module.exports = router;
