const mongoose = require('mongoose');

const surfboardSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    sku: {
        type: String,
        required: true,
        unique: true // Ensure that each SKU is unique
    }
});

module.exports = mongoose.model('SurfBoard', surfboardSchema);
