import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newposgrado',
  templateUrl: './newposgrado.component.html',
  styleUrls: ['./newposgrado.component.scss'],
})
export class NewposgradoComponent implements OnInit {

  datosnpos;

  constructor(
    private alertController: AlertController,
    private npos: FormBuilder
  ) {
    this.datosnpos = npos.group({
      nombre: ['',Validators.compose([Validators.maxLength(200), Validators.pattern('[a-zA-Z0-9]*'), Validators.required])],
    });
  }

  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregada',
      message: 'Posgrado Agregado',
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
          placeholder: 'Nuevo Nombre',
          attributes: {
            maxlength: 200,
          },
        },
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
