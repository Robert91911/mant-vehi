import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mantenimientos } from "./Mantenimientos";
import { VehiculoUsuario } from "./VehiculoUsuario";
import { Modelos } from "./Modelos";

@Index("id-modelo", ["idModelo"], { unique: true })
@Entity("vehiculos", { schema: "login_node" })
export class Vehiculos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-vehiculo" })
  idVehiculo: number;

  @Column("int", { name: "id-modelo", unique: true })
  idModelo: number;

  @Column("varchar", { name: "color", length: 50 })
  color: string;

  @Column("varchar", { name: "matricula", length: 7 })
  matricula: string;

  @Column("bigint", { name: "km" })
  km: string;

  @Column("text", { name: "imagen" })
  imagen: string;

  @OneToMany(
    () => Mantenimientos,
    (mantenimientos) => mantenimientos.idVehiculo2
  )
  mantenimientos: Mantenimientos[];

  @OneToOne(
    () => VehiculoUsuario,
    (vehiculoUsuario) => vehiculoUsuario.idVehiculo2
  )
  vehiculoUsuario: VehiculoUsuario;

  @OneToOne(() => Modelos, (modelos) => modelos.vehiculos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id-modelo", referencedColumnName: "idModelo" }])
  idModelo2: Modelos;
}
