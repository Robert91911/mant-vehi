import { Router } from 'express';
import auth from './auth';
import user from './user';
import vehicle from './vehicles';
import mant from './mants'
import marcas from './marcas'
import modelos  from './modelos'

import router from './auth';


const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/vehicles', vehicle);
routes.use('/mants', mant);
routes.use('/brand', marcas)
routes.use('/models', modelos)

export default routes;
