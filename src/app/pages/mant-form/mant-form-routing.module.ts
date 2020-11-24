import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantFormComponent } from './mant-form.component';

const routes: Routes = [{ path: '', component: MantFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantFormRoutingModule { }
