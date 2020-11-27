import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { VehiculoFormComponent } from './vehiculo-form.component';

const routes: Routes = [{ path: '', component: VehiculoFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoFormRoutingModule { }
