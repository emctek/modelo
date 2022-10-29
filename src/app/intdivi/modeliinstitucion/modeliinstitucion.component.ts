import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modeliinstitucion',
  templateUrl: './modeliinstitucion.component.html',
  styleUrls: ['./modeliinstitucion.component.scss'],
})
export class ModeliinstitucionComponent implements OnInit {



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
