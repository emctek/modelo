import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modelidivision',
  templateUrl: './modelidivision.component.html',
  styleUrls: ['./modelidivision.component.scss'],
})
export class ModelidivisionComponent implements OnInit {

  constructor(private alertController: AlertController) {}

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
          text: 'Cancelar'

        },
        {
          text: 'Eliminar'

        },
      ],
    });

    await alert.present();

  }

  ngOnInit() {}

}
