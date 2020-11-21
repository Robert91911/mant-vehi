import { getRepository, PrimaryGeneratedColumn } from 'typeorm';
import { Request, Response } from 'express';
import { Vehiculos } from '../entity/Vehiculos';
import { validate } from 'class-validator';

export class VehicleController {
    
    static getUserVehicles = async (req: Request, res: Response) => {
      const { id } = req.params;
      const vehicleRepository = getRepository(Vehiculos);
      let users;

      try {
        users = await vehicleRepository.find({ where: {idUsuario: id} });
      } catch (e) {
        res.status(404).json({ message: 'Somenthing goes wrong!' });
      }

      if (users.length > 0) {
        res.send(users);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };

    static getAll = async (req: Request, res: Response) => {
      
        const vehicleRepository = getRepository(Vehiculos);
        let vehiculos;
        
        try {
          vehiculos = await vehicleRepository.find({ select: ['idVehiculo', 'idModelo' , 'color', 'km', 'idUsuario2'] }, 
          );
            
        } catch (e) {
          res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    
        if (vehiculos.length > 0) {
          res.send(vehiculos);
        } else {
          res.status(404).json({ message: 'Not result' });
        }
        
      };
    
      static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const vehicleRepository = getRepository(Vehiculos);
        try {
          const vehiculo = await vehicleRepository.findOneOrFail(id);
          res.send(vehiculo);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };
    
      static new = async (req: Request, res: Response) => {
        const { idModelo, idUsuario, color, matricula, km, imagen } = req.body;
        const vehiculo = new Vehiculos();

        vehiculo.idModelo = idModelo;
        vehiculo.idUsuario = idUsuario;
        vehiculo.color = color;
        vehiculo.matricula = matricula;
        vehiculo.km = km;
        vehiculo.imagen = imagen
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(vehiculo, validationOpt);
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        const vehicleRepository = getRepository(Vehiculos);
        try {
          await vehicleRepository.save(vehiculo);
        } catch (e) {
          return res.status(409).json({ message: 'Vehicle already exist', e });
        }
        // All ok
        res.send('Vehicle created');
      };
    
      static edit = async (req: Request, res: Response) => {
        let vehicle;
        const { idVehiculo } = req.params;
        const { idUsuario, color, matricula, km, imagen} = req.body;
    
        const vehicleRepository = getRepository(Vehiculos);
        // Try get user
        try {
          vehicle = await vehicleRepository.findOneOrFail(idVehiculo);
          //vehicle.idUsuario = idUsuario
          //vehicle.color = color;
          //vehicle.matricula = matricula;
          vehicle.km = km;
          vehicle.imagen = imagen;
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(vehicle, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await vehicleRepository.save(vehicle);
        } catch (e) {
          return res.status(409).json({e});
        }
    
        res.status(201).json({ message: 'Vehicle update' });
      };
      /*
    
      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const vehicleRepository = getRepository(Vehicles);
        let user: Vehicles;
    
        try {
          user = await vehicleRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Remove user
        vehicleRepository.delete(id);
        res.status(201).json({ message: ' User deleted' });
      };
      */
      
    }
    
    export default VehicleController;