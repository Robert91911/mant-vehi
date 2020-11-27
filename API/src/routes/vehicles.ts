import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from './../middlewares/role';

const router = Router();

// Get a vehicle
router.get('/one/:id', VehicleController.getById);

// Get all vehicles
router.get('/',  VehicleController.getAll);

// Get vehicles of a user
router.get('/:id', VehicleController.getUserVehicles);

// Delete vehicle
router.delete('/:id', [checkJwt],  VehicleController.delete);

// Create vehicle
router.post('/', [checkJwt],  VehicleController.new);

// Edit vehicle
router.patch('/:id', [checkJwt],  VehicleController.edit);

export default router;
