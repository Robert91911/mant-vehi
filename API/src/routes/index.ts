import { Router } from 'express';
import auth from './auth';
import user from './user';
import vehicle from './vehicles';
import mant from './mants'

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/vehicles', vehicle);
routes.use('/mants', mant);


export default routes;
