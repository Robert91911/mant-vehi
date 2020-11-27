import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import routes from './routes';

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async () => {
    // Creamos la app expresas
    const app = express();

    // Inicializamos cors
    var cors = require('cors');
    
    // Middlewares
    app.use(cors());
    app.use(helmet());

    app.use(express.json());

    // Rutas
    app.use('/', routes);

    // Arrancamos el servidor express
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));
