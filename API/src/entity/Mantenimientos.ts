import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehiculos } from "./Vehiculos";
import { TiposMantenimientos } from "./TiposMantenimientos";

@Index("FK_ID_TIPO", ["idTipo"], {})
@Index("FK_ID_VEHICULO", ["idVehiculo"], {})
@Entity("mantenimientos", { schema: "mant_vehi" })
export class Mantenimientos {
  @PrimaryGeneratedColumn({ type: "int", name: "id-mantenimiento" })
  idMantenimiento: number;

  @Column("int", { name: "id-vehiculo" })
  idVehiculo: number;

  @Column("int", { name: "id-tipo" })
  idTipo: number;

  @Column("varchar", { name: "nombre", length: 255 })
  nombre: string;

  @Column("decimal", { name: "importe", precision: 10, scale: 0 })
  importe: string;

  @Column("varchar", { name: "factura", length: 255 })
  factura: string;

  @Column("datetime", { name: "fecha-creacion" })
  fechaCreacion: Date;

  @Column("bigint", { name: "km-mant" })
  kmMant: string;

  @Column("varchar", { name: "ubicacion", length: 255 })
  ubicacion: string;

  @Column("varchar", { name: "taller", length: 255 })
  taller: string;

  @ManyToOne(() => Vehiculos, (vehiculos) => vehiculos.mantenimientos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id-vehiculo", referencedColumnName: "idVehiculo" }])
  idVehiculo2: Vehiculos;

  @ManyToOne(
    () => TiposMantenimientos,
    (tiposMantenimientos) => tiposMantenimientos.mantenimientos,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "id-tipo", referencedColumnName: "idTipo" }])
  idTipo2: TiposMantenimientos;
}
