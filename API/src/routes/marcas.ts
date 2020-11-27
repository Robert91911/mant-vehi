import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import { MarcasController } from './../controller/MarcasController';

const router = Router();

// Get all brans
router.get('/' , MarcasController.getAll);

router.get('/one/:id' , MarcasController.getById);

export default router;