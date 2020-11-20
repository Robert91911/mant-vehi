import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import MantsController from '../controller/MantsController';


const router = Router();

// Get a maintenance
router.get('/:id', MantsController.getVehicleMants);

// Get all maintenance

// Delete maintenance

// Create maintenance

// Edit maintenance


export default router;
