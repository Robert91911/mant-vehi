import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { VehiclesService } from './../home/vehicles.service';
import { UserResponse, User, Roles } from '@shared/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  
  //id_usuario = this.authSvc.userValue.userId;
  
  vehicles: any = [];

  constructor(public authSvc: AuthService, private vehicleSvc: VehiclesService) { }

  ngOnInit(): void {
    this.getAll();
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

  }