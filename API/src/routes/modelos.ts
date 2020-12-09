import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import { ModeloController } from '../controller/ModeloController';


const router = Router();

// Get brand models
router.get('/:id' , [checkJwt], ModeloController.getVehicleModels);

router.get('/one/:id' , [checkJwt], ModeloController.getOne);

router.get('/' , [checkJwt], ModeloController.getAll);

export default router;
