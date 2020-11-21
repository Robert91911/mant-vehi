import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@shared/models/vehicle.interface';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.scss']
})
export class VehiculoFormComponent implements OnInit {

  vehiculo: Vehicle = {
    idVehiculo: 0,
    idModelo: 0,
    idUsuario: 0,
    color: "",
    matricula: "",
    km: "",
    imagen: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  updatevehiculo() {

  }

  saveNewvehiculo() {
    
  }

}
