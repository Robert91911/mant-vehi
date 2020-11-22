import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantFormRoutingModule } from './mant-form-routing.module';
import { MantFormComponent } from './mant-form.component';


@NgModule({
  declarations: [MantFormComponent],
  imports: [
    CommonModule,
    MantFormRoutingModule
  ]
})
export class MantFormModule { }
