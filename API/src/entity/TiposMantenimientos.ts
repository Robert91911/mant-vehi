import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mantenimientos } from "./Mantenimientos";

@Entity("tipos-mantenimientos", { schema: "mant_vehi" })
export class TiposMantenimientos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-tipo" })
  idTipo: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @OneToMany(() => Mantenimientos, (mantenimientos) => mantenimientos.idTipo2)
  mantenimientos: Mantenimientos[];
}
