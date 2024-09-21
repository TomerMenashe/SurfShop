const express = require('express');
const { getAllSurfBoards, addSurfBoard } = require('../controllers/surfboardController');

const router = express.Router();

// Get all surfboards
router.get('/', getAllSurfBoards);

// Add a new surfboard
router.post('/', addSurfBoard);

module.exports = router;
