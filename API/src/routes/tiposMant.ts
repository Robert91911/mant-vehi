import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import { TiposMantsController } from './../controller/TiposMantController'


const router = Router();

// Get all types
router.get('/', TiposMantsController.getAll);


export default router;
