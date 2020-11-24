export interface Mantenimiento {
    idMantenimiento: number;
    idVehiculo: number;
    idTipo: number;
    nombre: string;
    importe: string;
    factura: string;
    fechaCreacion: Date;
    kmMant: string;
    ubicacion: string;
    taller: string;
}