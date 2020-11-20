export interface Vehicle {
    idVehiculo: number;
    idModelo: number;
    idUsuario: number;
    color: string;
    matricula: string;
    km: string;
    imagen: string;
}

export interface VehicleResponse extends Vehicle {
    vehiculos: Array<number>;
  }
