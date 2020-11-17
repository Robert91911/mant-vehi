import { Router } from 'express';
import auth from './auth';
import user from './user';
import vehicle from './vehicles';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/vehicles', vehicle);


export default routes;
