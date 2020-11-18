import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Modelos } from "./Modelos";

@Entity("marca", { schema: "login_node" })
export class Marca {
  @PrimaryGeneratedColumn({ type: "int", name: "id-marca" })
  idMarca: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @OneToOne(() => Modelos, (modelos) => modelos.idMarca2)
  modelos: Modelos;
}
