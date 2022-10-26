import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-nuevadivision',
  templateUrl: './nuevadivision.component.html',
  styleUrls: ['./nuevadivision.component.scss'],
})
export class NuevadivisionComponent implements OnInit {

  constructor(private alertController: AlertController) { }


  async presentConfirmacion() {
    const alert = await this.alertController.create({
      header: 'Agregado',
      message: 'Division agragada',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}

}
