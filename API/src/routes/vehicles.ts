import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';

const router = Router();

// Get a vehicle
router.get('/:id', VehicleController.getById);

// Get all vehicles
router.get('/', VehicleController.getAll);

// Delete vehicle

// Create vehicle

// Edit vehicle


export default router;
