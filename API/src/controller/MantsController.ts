import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Mantenimientos } from '../entity/Mantenimientos'
import { validate } from 'class-validator';

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

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const mantsRepository = getRepository(Mantenimientos);
    try {
      const mantenimiento = await mantsRepository.findOneOrFail(id);
      res.send(mantenimiento);
    } catch (e) {
      res.status(404).json({ message: 'Not result' });
    }
  };

  static new = async (req: Request, res: Response) => {
    const { idVehiculo, idTipo, nombre, importe, factura, fechaCreacion, kmMant, ubicacion, taller } = req.body;
    const mantenimiento = new Mantenimientos();

    mantenimiento.idVehiculo = idVehiculo;
    mantenimiento.idTipo = idTipo;
    mantenimiento.nombre = nombre;
    mantenimiento.importe = importe;
    mantenimiento.factura = factura;
    mantenimiento.fechaCreacion = fechaCreacion;
    mantenimiento.kmMant = kmMant;
    mantenimiento.ubicacion = ubicacion;
    mantenimiento.taller = taller;

    // Validate
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(mantenimiento, validationOpt);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const mantsRepository = getRepository(Mantenimientos);
    try {
      await mantsRepository.save(mantenimiento);
    } catch (e) {
      return res.status(409).json({ message: 'Maintenance already exist', e });
    }
    // All ok
    res.send('Vehicle created');
  };

  static edit = async (req: Request, res: Response) => {
    let mantenimiento;
    const { id } = req.params;
    const { nombre, importe, factura, kmMant, ubicacion, taller } = req.body;

    const mantsRepository = getRepository(Mantenimientos);
    // Try get user
    try {
      mantenimiento = await mantsRepository.findOneOrFail(id);
      mantenimiento.nombre = nombre;
      mantenimiento.importe = importe;
      mantenimiento.factura = factura;
      mantenimiento.kmMant = kmMant;
      mantenimiento.ubicacion = ubicacion;
      mantenimiento.taller = taller;
    } catch (e) {
      return res.status(404).json({ message: 'Maintenance not found' });
    }
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(mantenimiento, validationOpt);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // Try to save user
    try {
      await mantsRepository.save(mantenimiento);
    } catch (e) {
      return res.status(409).json({e});
    }

    res.status(201).json({ message: 'Maintenance update' });
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vehicleRepository = getRepository(Mantenimientos);
    let mantenimiento: Mantenimientos;

    try {
      mantenimiento = await vehicleRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: 'Maintenance not found' });
    }

    // Remove user
    vehicleRepository.delete(id);
    res.status(201).json({ message: ' Maintenance deleted' });
  };

}


export default MantsController;