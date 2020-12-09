import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import { MarcasController } from './../controller/MarcasController';

const router = Router();

// Get all brans
router.get('/' , [checkJwt], MarcasController.getAll);

router.get('/one/:id' , [checkJwt], MarcasController.getById);

export default router;