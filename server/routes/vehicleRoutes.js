const express = require('express');
const {
  getVehicles,
  getVehicleById,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controller/vehicleController');

const router = express.Router();

// Define routes
router.get('/', getVehicles); // Get all vehicles
router.get('/:id', getVehicleById); // Get a single vehicle by ID
router.post('/', addVehicle); // Add a new vehicle
router.put('/:id', updateVehicle); // Update a vehicle by ID
router.delete('/:id', deleteVehicle); // Delete a vehicle by ID

module.exports = router;
