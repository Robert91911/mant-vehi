import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vehiculos } from "./Vehiculos";
import * as bcrypt from 'bcryptjs';

@Entity("users", { schema: "login_node" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "role", length: 255 })
  role: string;

  @OneToMany(() => Vehiculos, (vehiculos) => vehiculos.idUsuario2)
  vehiculos: Vehiculos[];

  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }

}
