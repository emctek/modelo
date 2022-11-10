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
import { MenuceComponent } from '../../../../../examen/src/app/menuce/menuce/menuce.component';
import { ReactiveFormsModule } from '@angular/forms';




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
    IonicModule,
    ReactiveFormsModule
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
