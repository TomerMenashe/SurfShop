const SurfBoard = require('../models/surfBoard');

// Get all surfboards
const getAllSurfBoards = async (req, res) => {
    try {
        const surfboards = await SurfBoard.find();
        res.json(surfboards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get surfboard by SKU
const getSurfBoardBySku = async (req, res) => {
  try {
    const surfboard = await SurfBoard.findOne({ sku: req.params.sku }); // Find by SKU
    if (!surfboard) {
      return res.status(404).json({ message: 'Surfboard not found' });
    }
    res.json(surfboard);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching surfboard', error: err });
  }
};


// Search surfboards by name or description
const searchSurfBoards = async (req, res) => {
    const searchTerm = req.query.q;
    try {
        // Use regular expression to perform case-insensitive search on name and description
        const surfboards = await SurfBoard.find({
            $or: [
                { model: { $regex: searchTerm, $options: 'i' } },   // Search by model (name)
                { description: { $regex: searchTerm, $options: 'i' } } // Search by description
            ]
        });
        res.json(surfboards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllSurfBoards,
    getSurfBoardBySku, // Export the new controller function
    searchSurfBoards,
};
