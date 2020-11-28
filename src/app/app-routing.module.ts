import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLoginGuard } from '@shared/guards/check-login.guard';
import { CheckLoguedGuard } from '@shared/guard/check-logued.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
      canActivate: [CheckLoguedGuard],
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
      canActivate: [CheckLoguedGuard],
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
      import('./pages/mantenimiento/home/mantenimiento.module').then(m => m.MantenimientoModule),
      canActivate: [CheckLoguedGuard],
  },
  {
     path: 'vehiculo', 
    loadChildren: () => 
      import('./pages/home/vehiculo-form/vehiculo-form.module').then(m => m.VehiculoFormModule),
      canActivate: [CheckLoguedGuard],
      
  },
  {
     path: 'vehiculo/:id', 
    loadChildren: () => 
      import('./pages/home/vehiculo-form/vehiculo-form.module').then(m => m.VehiculoFormModule),
      canActivate: [CheckLoguedGuard],
      
  },
  { path: 'mantenimiento', 
    loadChildren: () => 
      import('./pages/mantenimiento/form/form.module').then(m => m.FormModule),
      canActivate: [CheckLoguedGuard], 
  },
  { 
    path: 'mantenimiento/:id', 
    loadChildren: () => 
      import('./pages/mantenimiento/form/form.module').then(m => m.FormModule) ,
      canActivate: [CheckLoguedGuard],
  },
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
