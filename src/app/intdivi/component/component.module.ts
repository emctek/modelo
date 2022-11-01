import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewinstitucionComponent } from '../newinstitucion/newinstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';
import { AsignadivisionComponent } from '../asignadivision/asignadivision.component';
import { ModelidivisionComponent } from '../modelidivision/modelidivision.component';
import { ModeliinstitucionComponent } from '../modeliinstitucion/modeliinstitucion.component';
import { ModeliasignacionComponent } from '../modeliasignacion/modeliasignacion.component';
import { ConsultasComponent } from '../consultas/consultas.component';
import { UnionidComponent } from '../unionid/unionid.component';




@NgModule({
  declarations: [
  
  
    NewinstitucionComponent,
    NuevadivisionComponent,
    AsignadivisionComponent,
    ModelidivisionComponent,
    ModeliinstitucionComponent,
    ModeliasignacionComponent,
    ConsultasComponent,
    UnionidComponent

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
  
    NewinstitucionComponent,
    NuevadivisionComponent,
    AsignadivisionComponent,
    ModelidivisionComponent,
    ModeliinstitucionComponent,
    ModeliasignacionComponent,
    ConsultasComponent,
    UnionidComponent


  ]
})
export class ComponentModule { }
