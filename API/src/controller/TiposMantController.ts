import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Modelos } from '../entity/Modelos'
import { validate } from 'class-validator';
import { TiposMantenimientos } from './../entity/TiposMantenimientos'


export class TiposMantsController {

    static getAll = async (req: Request, res: Response) => {
        const tipoRepository = getRepository(TiposMantenimientos);
        let users;
    
        try {
          users = await tipoRepository.find({ select: ['idTipo', 'nombre'] });
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (users.length > 0) {
          res.send(users);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
      };

}