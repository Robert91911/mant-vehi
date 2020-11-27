import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { VehiclesService } from './services/vehicles.service';
import { UserResponse, User, Roles } from '@shared/models/user.interface';
import { HostBinding } from '@angular/core';
import { BrandService } from '@shared/services/brand.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  
  //id_usuario = this.authSvc.userValue.userId;
  
  vehicles: any = [];

  brand: any = [];

  brandName: String;

  constructor(public authSvc: AuthService, private vehicleSvc: VehiclesService, private brandSrv: BrandService ) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getMarca(id_vehiculo) {
    const id_usuario = JSON.parse(localStorage.getItem('user')) || null;
    console.log(id_usuario.userId)
    this.brandSrv.getMarca(id_vehiculo).subscribe(
      res => {
        this.vehicles = res;
      },
      err => console.log(err)
    );
  }

  getAll() {
    const id_usuario = JSON.parse(localStorage.getItem('user')) || null;
    console.log(id_usuario.userId)
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
        this.getAll();
      },
      err => console.log(err)
    )
  }

  }