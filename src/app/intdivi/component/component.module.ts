import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewinstitucionComponent } from '../newinstitucion/newinstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';
import { AsignadivisionComponent } from '../asignadivision/asignadivision.component';
import { ConsultasComponent } from '../consultas/consultas.component';
import { UnionidComponent } from '../unionid/unionid.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewinstitucionComponent,
    NuevadivisionComponent,
    AsignadivisionComponent,
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
    ConsultasComponent,
    UnionidComponent

  ]
})
export class ComponentModule { }
