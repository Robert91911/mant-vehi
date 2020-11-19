import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '@auth/auth.service';
import { VehiclesService } from './../home/vehicles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  

  vehicles: any = [];

  constructor(public authSvc: AuthService, private vehicleSvc: VehiclesService) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    this.vehicleSvc.getAll(1).subscribe(
      res => {
        this.vehicles = res;
      },
      err => console.log(err)
    );
  }
  }