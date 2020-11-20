import { Component, OnInit } from '@angular/core';

import { MantenimientoService } from './../mantenimiento/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  mantenance: any = [];

  constructor( private mantsSvc: MantenimientoService) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    const id_usuario = JSON.parse(localStorage.getItem('user')) || null;
    console.log(id_usuario.userId)
    this.mantsSvc.getAll(id_usuario.userId).subscribe(
      res => {
        this.mantenance = res;
      },
      err => console.log(err)
    );
  }

}
