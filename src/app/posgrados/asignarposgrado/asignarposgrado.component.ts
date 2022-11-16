import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignarposgrado',
  templateUrl: './asignarposgrado.component.html',
  styleUrls: ['./asignarposgrado.component.scss'],
})
export class AsignarposgradoComponent implements OnInit {

  datosasipos;

  constructor(
    private alertController: AlertController,
    private asipos: FormBuilder
  ) {
    this.datosasipos = asipos.group({
      posgrado: ['', Validators.required],
      institucion: ['', Validators.required],
      division: ['', Validators.required],
    });
  }

  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      message: 'Posgrado Asignada',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async modificar() {
    const alert = await this.alertController.create({
      header: 'Nuevo Nombre',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nueva Nombre Institucion',
          attributes: {
            maxlength: 200,
          },
        },
        {
          placeholder: 'Nueva Nombre Division',
          attributes: {
            maxlength: 200,
          },
        },{
          placeholder: 'Nueva Nombre Posgrado',
          attributes: {
            maxlength: 200,
          },
        }
      ],
    });

    await alert.present();
  }

  async eliminar() {
    const alert = await this.alertController.create({
      header: 'Eliminar',

      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Eliminar',
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {}

}
