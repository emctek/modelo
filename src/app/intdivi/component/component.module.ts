import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../cabecera/cabecera.component';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from 'src/app/intdivi/menu/menu.component';
import { PieComponent } from '../pie/pie.component';
import { NewinstitucionComponent } from '../newinstitucion/newinstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';




@NgModule({
  declarations: [
    CabeceraComponent,
    MenuComponent,
    PieComponent,
    NewinstitucionComponent,
    NuevadivisionComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
    MenuComponent,
    PieComponent,
    NewinstitucionComponent,
    NuevadivisionComponent


  ]
})
export class ComponentModule { }
