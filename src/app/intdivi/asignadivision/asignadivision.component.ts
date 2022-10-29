import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignadivision',
  templateUrl: './asignadivision.component.html',
  styleUrls: ['./asignadivision.component.scss'],
})
export class AsignadivisionComponent implements OnInit {

  constructor(private alertController: AlertController) { }


  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      message: 'Division Asignada',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}
