const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const surfboardRoutes = require('./routes/surfboardRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/surfboards', surfboardRoutes);

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
