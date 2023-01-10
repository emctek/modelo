/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'bd',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./intdivi/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'bd',
    loadChildren: () => import('./prueba/bd/bd.module').then( m => m.BdPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
