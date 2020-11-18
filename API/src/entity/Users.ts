import {Column,Entity,Index,OneToOne,PrimaryGeneratedColumn} from "typeorm";
import {VehiculoUsuario} from './VehiculoUsuario'


@Index("username",["username",],{ unique:true })
@Entity("users" ,{schema:"login_node" } )
export  class Users {

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@Column("varchar",{ name:"username",unique:true,length:255 })
username:string;

@Column("varchar",{ name:"password",length:255 })
password:string;

@Column("varchar",{ name:"role",length:255 })
role:string;

@OneToOne(()=>VehiculoUsuario,vehiculoUsuario=>vehiculoUsuario)


vehiculoUsuario:VehiculoUsuario;

}
