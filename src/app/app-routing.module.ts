import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoginGuard } from '@shared/guards/check-login.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [CheckLoginGuard],
  },
  {
     path: 'mantenimientos/:id',
    loadChildren: () => 
      import('./pages/mantenimiento/home/mantenimiento.module').then(m => m.MantenimientoModule) 
  },
  {
     path: 'vehiculo', 
    loadChildren: () => 
      import('./pages/home/vehiculo-form/vehiculo-form.module').then(m => m.VehiculoFormModule) 
  },
  {
     path: 'vehiculo/:id', 
    loadChildren: () => 
      import('./pages/home/vehiculo-form/vehiculo-form.module').then(m => m.VehiculoFormModule) 
  },
  { path: 'mantenimiento', 
    loadChildren: () => 
      import('./pages/mantenimiento/form/form.module').then(m => m.FormModule) 
  },
  { 
    path: 'mantenimiento/:id', 
    loadChildren: () => 
      import('./pages/mantenimiento/form/form.module').then(m => m.FormModule) 
},
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
