// server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');  // Correct path to authRoutes

dotenv.config();
const app = express();

app.use(express.json());  // Parse JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Database connection error:', err));

// Mount the auth routes at /auth
app.use('/auth', authRoutes);  // This line makes /auth/register and /auth/login work

// Test route to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running on the server!');
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
