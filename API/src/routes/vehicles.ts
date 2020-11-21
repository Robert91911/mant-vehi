import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';

const router = Router();

// Get a vehicle
router.get('/one/:id', VehicleController.getById);

// Get all vehicles
router.get('/', VehicleController.getAll);

// Get vehicles of a user
router.get('/:id', VehicleController.getUserVehicles);

// Delete vehicle

// Create vehicle
router.post('/', VehicleController.new);

// Edit vehicle
router.patch('/:id', VehicleController.edit);

export default router;
