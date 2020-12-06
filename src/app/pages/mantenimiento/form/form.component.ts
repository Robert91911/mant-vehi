import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from '../services/mantenimiento.service';
import { TypeService } from '@shared/services/type.service';
import { Types } from '@shared/models/type.interface'

import { Mantenimiento } from '@shared/models/mant.interface'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  //Creamos un objeto de tipo mantenimiento, el modelo se importa de su propia interfaz
  mantenimiento: Mantenimiento | any = {
    idMantenimiento: "",
    idVehiculo: "",
    idTipo: "",
    nombre: "",
    importe: "",
    factura: "",
    fechaCreacion: "",
    kmMant: "",
    ubicacion: "",
    taller: "",
  }

  tipo: Types | any = {
    idTipo: "",
    nombre: ""
  }

  tipos: Types | any;
  
  //Variable para saber si estamos editando o guardando uno nuevo
  edit: boolean = false;

  constructor(private mantSrv: MantenimientoService, private router: Router, private activatedRoute: ActivatedRoute, private tiposSrv: TypeService ) { }

  //Al iniciar se recupera del almacenamineto el id del vehiculo que es el mantenimiento y se cargan los datos, solo si es editar
  ngOnInit(): void {
    this.getAllTipos()
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

  //Get todos los tipos para hacer la lista
  getAllTipos() {
    this.tiposSrv.getAll().subscribe(
      res => {
        this.tipos = res;
      },
      err => console.log(err)
    );
  }

  //Metodo de actualizacion del objeto
  updateMant() {
    this.mantSrv.updateMant(this.mantenimiento.idMantenimiento, this.mantenimiento)
    .subscribe(
      res => {
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

  //Metodo de guardado del objeto
  saveNewMant() {
    //delete this.mantenimiento.idVehiculo;
    console.log(this.mantenimiento)
    this.mantSrv.saveMant(this.mantenimiento)
    .subscribe(
      res => {
        console.log(res);
        //localStorage.removeItem('idVehiculo');
        this.router.navigate(['/mantenimientos/:idVehiculo'])
      },
      err => console.log(err)
    )
  }



}
