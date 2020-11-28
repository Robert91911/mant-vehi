import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    MatSelectModule
  ]
})
export class FormModule { }
