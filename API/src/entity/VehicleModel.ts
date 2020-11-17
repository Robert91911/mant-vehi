import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity()

export class VehicleModel {
  @PrimaryGeneratedColumn()
  idModelo: number;

  @Column()
  idMarca: string;

  @Column()
  nombre: string;

  @Column()
  generacion: string;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;

  @Column()
  serie: string;

  @Column()
  modificacion: string;

  @Column()
  carroceria: string;

  @Column()
  combustible: string;
  
}