const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');  // Add cookie-parser for managing cookies
const surfboardRoutes = require('./routes/surfboardRoutes');
const cartRoutes = require('./routes/cartRoutes');  // Import cart routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());  // Enable cookie parsing

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/surfboards', surfboardRoutes);
app.use('/api/cart', cartRoutes);  // Add the cart routes to the API

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
