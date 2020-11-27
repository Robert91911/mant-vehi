import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { VehiculoFormRoutingModule } from './vehiculo-form-routing.module';
import { VehiculoFormComponent } from './vehiculo-form.component';


@NgModule({
  declarations: [VehiculoFormComponent],
  imports: [
    CommonModule,
    VehiculoFormRoutingModule,
    FormsModule,
    MatSelectModule
  ]
})
export class VehiculoFormModule { }
