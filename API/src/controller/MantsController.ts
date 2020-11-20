import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Mantenimientos } from '../entity/Mantenimientos'

export class MantsController {

    static getVehicleMants = async (req: Request, res: Response) => {
        const { id } = req.params;
        const mantsRepository = getRepository(Mantenimientos);
        let mants;
  
        try {
          mants = await mantsRepository.find({ where: {idVehiculo: id} });
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
  
        if (mants.length > 0) {
          res.send(mants);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
      };

}


export default MantsController;