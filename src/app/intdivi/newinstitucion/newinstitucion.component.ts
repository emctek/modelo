import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newinstitucion',
  templateUrl: './newinstitucion.component.html',
  styleUrls: ['./newinstitucion.component.scss'],
})
export class NewinstitucionComponent implements OnInit {

  datosins;

  constructor(
    private alertController: AlertController,
    private ins: FormBuilder
  ) {
    this.datosins = ins.group({
      nombre: ['', Validators.required],
    });
  }

  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregada',
      message: 'Institucion Agregada',
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
