// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const vehicleRoutes = require('./routes/vehicleRoutes');

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/carDealership'; // Use .env or default
mongoose
  .connect(DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/vehicles', vehicleRoutes); // Route for vehicle-related API

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Car Dealership API');
});

// Start server
const PORT = process.env.PORT || 5000; // Use .env or default port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
