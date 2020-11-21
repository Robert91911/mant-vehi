import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Modelos } from "./Modelos";

@Entity("marca", { schema: "mant_vehi" })
export class Marca {
  @PrimaryGeneratedColumn({ type: "int", name: "id-marca" })
  idMarca: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @OneToMany(() => Modelos, (modelos) => modelos.idMarca2)
  modelos: Modelos[];
}
