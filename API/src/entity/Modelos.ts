import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Marca } from "./Marca";
import { Vehiculos } from "./Vehiculos";

@Index("id-marca", ["idMarca"], { unique: true })
@Index("id-marca_2", ["idMarca"], {})
@Entity("modelos", { schema: "login_node" })
export class Modelos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-modelo" })
  idModelo: number;

  @Column("int", { name: "id-marca", unique: true })
  idMarca: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @Column("varchar", { name: "generacion", length: 255 })
  generacion: string;

  @Column("date", { name: "fecha-inicio" })
  fechaInicio: string;

  @Column("date", { name: "fecha-fin" })
  fechaFin: string;

  @Column("varchar", { name: "serie", length: 255 })
  serie: string;

  @Column("varchar", { name: "modificacion", length: 255 })
  modificacion: string;

  @Column("varchar", { name: "carroceria", length: 255 })
  carroceria: string;

  @Column("varchar", { name: "combustible", length: 255 })
  combustible: string;

  @OneToOne(() => Marca, (marca) => marca.modelos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id-marca", referencedColumnName: "idMarca" }])
  idMarca2: Marca;

  @OneToOne(() => Vehiculos, (vehiculos) => vehiculos.idModelo2)
  vehiculos: Vehiculos;
}
