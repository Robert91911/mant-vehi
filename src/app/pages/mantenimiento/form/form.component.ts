import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from '../services/mantenimiento.service';

import { Mantenimiento } from '@shared/models/mant.interface'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  mantenimiento: Mantenimiento | any = {
    idMantenimiento: null,
    idVehiculo: null,
    idTipo: null,
    nombre: "",
    importe: "",
    factura: "",
    fechaCreacion: Date,
    kmMant: "",
    ubicacion: "",
    taller: "",
  }

  edit: boolean = false;

  constructor(private mantSrv: MantenimientoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  updateMant() {
    this.mantSrv.updateMant(this.mantenimiento.idMantenimiento, this.mantenimiento)
    .subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  saveNewMant() {
    //delete this.mantenimiento.idVehiculo;
    console.log(this.mantenimiento)
    this.mantSrv.saveMant(this.mantenimiento)
    .subscribe(
      res => {
        console.log(res);
        localStorage.removeItem('idVehiculo');
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  ngOnInit(): void {
    const idVehiculo = JSON.parse(localStorage.getItem('idVehiculo')) || null;
    this.mantenimiento.idVehiculo = idVehiculo
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.mantSrv.getById(params.id)
      .subscribe(
        res => {
          this.mantenimiento = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

}
