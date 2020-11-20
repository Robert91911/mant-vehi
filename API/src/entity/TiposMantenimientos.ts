import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Mantenimientos } from "./Mantenimientos";

@Entity("tipos-mantenimientos", { schema: "login_node" })
export class TiposMantenimientos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-tipo" })
  idTipo: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @OneToOne(() => Mantenimientos, (mantenimientos) => mantenimientos.idTipo)
  mantenimientos: Mantenimientos;
}
