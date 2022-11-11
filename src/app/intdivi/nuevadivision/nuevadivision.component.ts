import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevadivision',
  templateUrl: './nuevadivision.component.html',
  styleUrls: ['./nuevadivision.component.scss'],
})
export class NuevadivisionComponent implements OnInit {
  datosdiv;

  constructor(
    private alertController: AlertController,
    private div: FormBuilder
  ) {
    this.datosdiv = div.group({
      nombre: ['', Validators.required],
    });
  }

  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregada',
      message: 'Division Agregada',
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
