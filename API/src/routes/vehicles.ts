import { Router } from 'express';
import { VehicleController } from '../controller/VehicleController';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from './../middlewares/role';

const router = Router();

// Get a vehicle
router.get('/one/:id', [checkJwt], VehicleController.getById);

// Get all vehicles
router.get('/',  [checkJwt], VehicleController.getAll);

// Get vehicles of a user
router.get('/:id', [checkJwt], VehicleController.getUserVehicles);

// Delete vehicle
router.delete('/:id', [checkJwt],  VehicleController.delete);

// Create vehicle
router.post('/', [checkJwt],  VehicleController.new);

// Edit vehicle
router.patch('/:id', [checkJwt],  VehicleController.edit);

export default router;
