import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoFormRoutingModule } from './vehiculo-form-routing.module';
import { VehiculoFormComponent } from './vehiculo-form.component';


@NgModule({
  declarations: [VehiculoFormComponent],
  imports: [
    CommonModule,
    VehiculoFormRoutingModule
  ]
})
export class VehiculoFormModule { }
