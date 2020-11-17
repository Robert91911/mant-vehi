import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity({name: "vehiculos"})
export class Vehicles {
  @PrimaryGeneratedColumn()
  "id-vehiculo": number;

  @Column()
  "id-modelo": string;

  @Column()
  color: string;

  @Column()
  matricula: string;

  @Column()
  km: string;

  @Column()
  imagen: string;

}