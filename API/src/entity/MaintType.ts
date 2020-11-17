import { Entity, PrimaryGeneratedColumn, Unique, Column } from 'typeorm';

@Entity()

export class MaintType {
  @PrimaryGeneratedColumn()
  idTipo: number;

  @Column()
  nombre: string;

}