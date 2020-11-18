import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Vehiculos } from '../entity/Vehiculos';
import { validate } from 'class-validator';

export class VehicleController {
    
    static getUserVehicles = async (req: Request, res: Response) => {
      const { id } = req.params;
      const userRepository = getRepository(Vehiculos);
      let users;

      try {
        users = await userRepository.find({ where: {idUsuario: id} });
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
      
        const userRepository = getRepository(Vehiculos);
        let vehiculos;
        
        try {
          vehiculos = await userRepository.find({ select: ['idVehiculo', 'idModelo' , 'color', 'km', 'idUsuario2'] }, 
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
        const userRepository = getRepository(Vehiculos);
        try {
          const vehiculo = await userRepository.findOneOrFail(id);
          res.send(vehiculo);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };
    /*
      static new = async (req: Request, res: Response) => {
        const { username, password, role } = req.body;
        const user = new Vehicles();
    
        user.username = username;
        user.password = password;
        user.role = role;
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validationOpt);
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const userRepository = getRepository(Vehicles);
        try {
          user.hashPassword();
          await userRepository.save(user);
        } catch (e) {
          return res.status(409).json({ message: 'Username already exist' });
        }
        // All ok
        res.send('User created');
      };
    
      static edit = async (req: Request, res: Response) => {
        let user;
        const { id } = req.params;
        const { username, role } = req.body;
    
        const userRepository = getRepository(Vehicles);
        // Try get user
        try {
          user = await userRepository.findOneOrFail(id);
          user.username = username;
          user.role = role;
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(user, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await userRepository.save(user);
        } catch (e) {
          return res.status(409).json({ message: 'Username already in use' });
        }
    
        res.status(201).json({ message: 'User update' });
      };
    
      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Vehicles);
        let user: Vehicles;
    
        try {
          user = await userRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Remove user
        userRepository.delete(id);
        res.status(201).json({ message: ' User deleted' });
      };
      */
    }
    
    export default VehicleController;