import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MantenimientoService } from '../services/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  //Array de los mantenimientos
  mantenimientos: any = [];
  //Id del vehiculo que se le pasa por parámetro desde home (cuando se pulsa en un vehiculo)
  idVehiculo: number;

  constructor( private mantsSvc: MantenimientoService, private activatedRoute: ActivatedRoute) { }

  //Cuamdo se inicia el componente primero llama al método para obtener todos los mantenimientos
  ngOnInit(): void {
    this.getAll();
  }

  //Metodo que trae todos los mantenimientos (llama al método getAll desde el servicio)
  async getAll() {
    const params = this.activatedRoute.snapshot.params;
    await delay(100);
    this.mantsSvc.getAll(params.id).subscribe(
      res => {
        this.idVehiculo = params.id
        this.mantenimientos = res;
      },
      err => console.log(err)
    );
  }

  //Borra un vehiculo, recibe su id por parámetro
  deleteVehicle(id: string) {
    this.mantsSvc.deleteMant(id).subscribe(
      res => {
        console.log(res);
        this.getAll();
      },
      err => console.log(err)
    )
  }

  //Guarda el vehiculo en el almacenamiento local del navegador
  saveVehicleId(id: number){
    localStorage.setItem('idVehiculo', JSON.stringify(id));
  }

}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}