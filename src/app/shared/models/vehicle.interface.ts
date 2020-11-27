import { Model } from './model.interface';

export interface Vehicle {
    idVehiculo: number;
    idModelo: number;
    idUsuario: number;
    color: string;
    matricula: string;
    km: number;
    imagen: Blob;
    nombreModelo: String;
    nombreMarca: String;
    modeloObj: Model;
}