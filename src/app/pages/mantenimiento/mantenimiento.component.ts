import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MantenimientoService } from './../mantenimiento/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  mantenances: any = [];

  constructor( private mantsSvc: MantenimientoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll() {
    const params = this.activatedRoute.snapshot.params;
    this.mantsSvc.getAll(params.id).subscribe(
      res => {
        this.mantenances = res;
      },
      err => console.log(err)
    );
  }

}
