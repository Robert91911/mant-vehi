import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '@auth/auth.service';
import { VehiclesService } from './../home/services/vehicles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public authSvc: AuthService, private vehicleSvc: VehiclesService) {}
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.vehicleSvc.getAll(1).subscribe((vehicles) => {
      this.dataSource.data = vehicles;
    });
  }
}