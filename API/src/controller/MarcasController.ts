import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Marca } from '../entity/Marca'
import { validate } from 'class-validator';

export class MarcasController {
    static getAll = async (req: Request, res: Response) => {
      
        const vehicleRepository = getRepository(Marca);
        let marcas;
        
        try {
            marcas = await vehicleRepository.find({ select: ['idMarca', "nombre"] }, 
          );
            
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (marcas.length > 0) {
          res.send(marcas);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
        
      };
}
