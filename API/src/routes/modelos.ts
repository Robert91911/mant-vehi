import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import { ModeloController } from '../controller/ModeloController';


const router = Router();

// Get brand models
router.get('/:id' , ModeloController.getVehicleModels);

router.get('/one/:id' , ModeloController.getOne);

router.get('/' , ModeloController.getAll);

export default router;
