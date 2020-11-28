import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { VehiclesService } from './services/vehicles.service';

import { UserResponse, User, Roles } from '@shared/models/user.interface';
import { HostBinding } from '@angular/core';
import { BrandService } from '@shared/services/brand.service'
import { ModelService } from '@shared/services/model.service'
import { Model } from '@shared/models/model.interface'
import { Vehicle } from '@app/shared/models/vehicle.interface';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  //id_usuario = this.authSvc.userValue.userId;
  
  vehicles: Vehicle | any;

  constructor(public authSvc: AuthService, private vehicleSvc: VehiclesService, private brandSrv: BrandService, private modelSrv: ModelService, public alertService: AlertService) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  async getAll() {
    const id_usuario = JSON.parse(localStorage.getItem('user')) || null;
    await delay(100);
    this.vehicleSvc.getAll(id_usuario.userId).subscribe(
      res => {
        this.vehicles = res;
      },
      err => console.log(err)
    );
  }

  deleteVehicle(id: string) {
    this.vehicleSvc.deleteVehicle(id).subscribe(
      res => {
        console.log(res);
        this.alertService.warn("Vehiculo eliminado", this.options)
        this.getAll();
      },
      err => console.log(err)
    )
  }

  }

  
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}