import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignadivision',
  templateUrl: './asignadivision.component.html',
  styleUrls: ['./asignadivision.component.scss'],
})
export class AsignadivisionComponent implements OnInit {
  datosasi;

  constructor(
    private alertController: AlertController,
    private asi: FormBuilder
  ) {
    this.datosasi = asi.group({
      institucion: ['', Validators.required],
      division: ['', Validators.required],
    });
  }

  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      message: 'Division Asignada',
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
          placeholder: 'Nuevo Nombre Institucion',
          attributes: {
            maxlength: 200,
          },
        },
        {
          placeholder: 'Nuevo Nombre Division',
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
