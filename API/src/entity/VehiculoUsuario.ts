import {Column,Entity,Index,JoinColumn,OneToOne} from "typeorm";
import {Users} from './Users'
import {Vehiculos} from './Vehiculos'


@Index("id",["id",],{ unique:true })
@Entity("vehiculo-usuario" ,{schema:"login_node" } )
export  class VehiculoUsuario {

@Column("int",{ primary:true,name:"id-vehiculo" })
idVehiculo:number;

@Column("int",{ name:"id",unique:true })
id:number;

@OneToOne(()=>Users,users=>users.vehiculoUsuario,{ onDelete:"CASCADE",onUpdate:"CASCADE" })
@JoinColumn([{ name: "id", referencedColumnName: "id" },
])

id2:Users;

@OneToOne(()=>Vehiculos,vehiculos=>vehiculos.vehiculoUsuario,{ onDelete:"CASCADE",onUpdate:"CASCADE" })
@JoinColumn([{ name: "id-vehiculo", referencedColumnName: "idVehiculo" },
])

idVehiculo2:Vehiculos;

}
