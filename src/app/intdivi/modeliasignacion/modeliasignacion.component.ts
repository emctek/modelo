import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modeliasignacion',
  templateUrl: './modeliasignacion.component.html',
  styleUrls: ['./modeliasignacion.component.scss'],
})
export class ModeliasignacionComponent implements OnInit {

  constructor(private alertController: AlertController) {}

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
