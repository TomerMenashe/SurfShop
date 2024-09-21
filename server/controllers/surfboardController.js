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

// Add a new surfboard
const addSurfBoard = async (req, res) => {
    const surfboard = new SurfBoard({
        brand: req.body.brand,
        model: req.body.model,
        length: req.body.length,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
    });

    try {
        const newSurfboard = await surfboard.save();
        res.status(201).json(newSurfboard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllSurfBoards,
    addSurfBoard
};
