import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity()

export class VehicleBrand {
  @PrimaryGeneratedColumn()
  idMarca: number;

  @Column()
  nombre: string;

}