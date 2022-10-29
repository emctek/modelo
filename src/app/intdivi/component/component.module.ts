import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../cabecera/cabecera.component';

import { IonicModule } from '@ionic/angular';
import { MenuComponent } from 'src/app/intdivi/menu/menu.component';
import { PieComponent } from '../pie/pie.component';
import { NewinstitucionComponent } from '../newinstitucion/newinstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';
import { AsignadivisionComponent } from '../asignadivision/asignadivision.component';
import { ModelidivisionComponent } from '../modelidivision/modelidivision.component';
import { ModeliinstitucionComponent } from '../modeliinstitucion/modeliinstitucion.component';
import { ModeliasignacionComponent } from '../modeliasignacion/modeliasignacion.component';
import { ConsultasComponent } from '../consultas/consultas.component';




@NgModule({
  declarations: [
    CabeceraComponent,
    MenuComponent,
    PieComponent,
    NewinstitucionComponent,
    NuevadivisionComponent,
    AsignadivisionComponent,
    ModelidivisionComponent,
    ModeliinstitucionComponent,
    ModeliasignacionComponent,
    ConsultasComponent

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
    NuevadivisionComponent,
    AsignadivisionComponent,
    ModelidivisionComponent,
    ModeliinstitucionComponent,
    ModeliasignacionComponent,
    ConsultasComponent


  ]
})
export class ComponentModule { }
