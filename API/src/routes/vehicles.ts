import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';

const router = Router();

// Get a vehicle
router.get('/:id', VehicleController.getUserVehicles);

// Get all vehicles
router.get('/', VehicleController.getAll);

// Get vehicles of a user
router.get('/', VehicleController.getAll);


// Delete vehicle
router.post('/', VehicleController.new);
// Create vehicle


// Edit vehicle


export default router;
