import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantenimientoComponent } from './mantenimiento.component';


@NgModule({
  declarations: [MantenimientoComponent],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
