import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity()

export class Maints {
  @PrimaryGeneratedColumn()
  idMantenimiento: number;

  @Column()
  idVehiculo: string;

  @Column()
  idTipo: string;

  @Column()
  nombre: string;

  @Column()
  importe: string;

  @Column()
  factura: string;

  @Column()
  fechaCreacion: string;

  @Column()
  kmMant: string;

  @Column()
  ubicacion: string;

  @Column()
  taller: string;
  
}