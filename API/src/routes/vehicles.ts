import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';

const router = Router();

// Get a vehicle


// Get all vehicles
router.get('/', VehicleController.getAll);

// Delete vehicle

// Create vehicle

// Edit vehicle


export default router;
