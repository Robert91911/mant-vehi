import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Modelos } from '../entity/Modelos'
import { validate } from 'class-validator';


export class ModeloController {
    static getVehicleModels = async (req: Request, res: Response) => {
        const { id } = req.params;
        const vehicleRepository = getRepository(Modelos);
        let modelos;
  
        try {
            modelos = await vehicleRepository.find({ where: {idModelo: id} });
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
  
        if (modelos.length > 0) {
          res.send(modelos);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
      };

      static getAll = async (req: Request, res: Response) => {
      
        const vehicleRepository = getRepository(Modelos);
        let modelos;
        
        try {
            modelos = await vehicleRepository.find({ select: ['idModelo', 'idMarca', 'nombre', 'generacion', 'fechaInicio', 'fechaFin', 'serie', 'modificacion', 'carroceria', 'combustible'] }, 
          );
            
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (modelos.length > 0) {
          res.send(modelos);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
        
      };
}
