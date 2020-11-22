import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import MantsController from '../controller/MantsController';


const router = Router();

// Get a vehicle
router.get('/one/:id', [checkJwt] , MantsController.getById);

// Get vehicle maintenance
router.get('/:id', MantsController.getVehicleMants);

// Get all maintenance


// Delete maintenance


// Create vehicle
router.post('/', [checkJwt],  MantsController.new);

// Edit vehicle
router.patch('/:id', [checkJwt],  MantsController.edit);


export default router;
