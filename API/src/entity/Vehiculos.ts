import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mantenimientos } from "./Mantenimientos";
import { Modelos } from "./Modelos";
import { Users } from "./Users";

@Index("id-modelo_3", ["idModelo"], {})
@Index("id-usuario", ["idUsuario"], {})
@Entity("vehiculos", { schema: "login_node" })
export class Vehiculos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-vehiculo" })
  idVehiculo: number;

  @Column("int", { name: "id-modelo" })
  idModelo: number;

  @Column("int", { name: "id-usuario" })
  idUsuario: number;

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

  @ManyToOne(() => Modelos, (modelos) => modelos.vehiculos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id-modelo", referencedColumnName: "idModelo" }])
  idModelo2: Modelos;

  @ManyToOne(() => Users, (users) => users.vehiculos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id-usuario", referencedColumnName: "id" }])
  idUsuario2: Users;
}
