import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Brand } from '@app/shared/models/brand.interface';
import { Vehicle } from '@shared/models/vehicle.interface';

import { VehiclesService } from './../services/vehicles.service';
import { BrandService } from '@shared/services/brand.service';
import { Model } from '@app/shared/models/model.interface';
import { ModelService } from '@app/shared/services/model.service';
 
@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.scss']
})
export class VehiculoFormComponent implements OnInit {

  //@HostBinding('class') classes = 'row';
  
  vehiculo: Vehicle | any = {
    idVehiculo: null,
    idModelo: null,
    idUsuario: null,
    color: '',
    matricula: '',
    km: null,
    imagen: ""
  }

  brands: Brand | any;

  models: Model | any;

  model: Model | any;

  edit: boolean = false;

  constructor(private vehiculoSrv: VehiclesService , private router: Router, private activatedRoute: ActivatedRoute, private brandSrv: BrandService, private modelSrv: ModelService) { }

  ngOnInit(): void {
    this.getModels()
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.vehiculoSrv.getById(params.id)
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


  getModels(){
    const id_usuario = JSON.parse(localStorage.getItem('user')) || null;
    console.log(id_usuario.userId)
    this.modelSrv.getAll().subscribe(
      res => {
        this.models = res;
      },
      err => console.log(err)
    );
  }

  cleanVehicle(): void {
    this.vehiculo = null;
  }

  updateVehicle() {
    //delete this.vehiculo.idUsuario;
    this.vehiculoSrv.updateVehicle(this.vehiculo.idVehiculo, this.vehiculo)
    .subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  saveNewVehicle() {
    const idUsuarioObj = JSON.parse(localStorage.getItem('user'))
    this.vehiculo.idUsuario = idUsuarioObj.userId
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

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.vehiculo.imagen = file;
    }
  }

}
