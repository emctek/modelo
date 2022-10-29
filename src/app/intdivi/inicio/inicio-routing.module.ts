import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/intdivi/menu/menu.component';
import { NewinstitucionComponent } from '../newinstitucion/newinstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';

import { InicioPage } from './inicio.page';



const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'Menu',
    component: MenuComponent
  },

  {
    path: 'Nueva-Institucion',
    component: NewinstitucionComponent
  },
  {
    path: 'Nueva-Division',
    component: NuevadivisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
