import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  aparece = false;

  constructor() {}

  ngOnInit() {}

  onBuscarA(validar: boolean) {
    this.aparece = validar;

    console.log(this.aparece);
  }
}
