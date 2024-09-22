const express = require('express');
const { getAllSurfBoards, addSurfBoard, searchSurfBoards, getSurfBoardBySku } = require('../controllers/surfboardController'); // Import getSurfBoardBySku controller

const router = express.Router();

// Get all surfboards
router.get('/', getAllSurfBoards);


// Search surfboards by name or description
router.get('/search', searchSurfBoards);

// Get a specific surfboard by SKU
router.get('/:sku', getSurfBoardBySku); // Modify the route to use `sku` instead of `id`

module.exports = router;
