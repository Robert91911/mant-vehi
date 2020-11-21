import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '@shared/models/vehicle.interface';
import { concatMap } from 'rxjs/operators';

import { VehiclesService } from '../home/vehicles.service';
 
@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.scss']
})
export class VehiculoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  

  vehiculo: Vehicle | any = {
    idVehiculo: 0,
    idModelo: 0,
    idUsuario: 0,
    color: '',
    matricula: '',
    km: 0,
    imagen: ''
  }

  edit: boolean = false;

  constructor(private vehiculoSrv: VehiclesService , private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.vehiculoSrv.getAll(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.vehiculo = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }



  updateVehicle() {
    console.log("Se está actualizando un vehiculo")
    this.vehiculoSrv.updateVehicle(this.vehiculo.idVehiculo, this.vehiculo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  saveNewVehicle() {
    const idUsuarioObj = JSON.parse(localStorage.getItem('user'))
    this.vehiculo.idUsuario = idUsuarioObj.userId
    console.log("Se está creando un vehiculo nuevo")
    delete this.vehiculo.idVehiculo;
    console.log(this.vehiculo)
    this.vehiculoSrv.saveVehicle(this.vehiculo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

}
