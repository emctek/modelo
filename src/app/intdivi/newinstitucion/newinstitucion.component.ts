import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newinstitucion',
  templateUrl: './newinstitucion.component.html',
  styleUrls: ['./newinstitucion.component.scss'],
})
export class NewinstitucionComponent implements OnInit {

  constructor(private alertController: AlertController) { }


  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      message: 'Institucion Agregada',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}
