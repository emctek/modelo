import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ConsultasComponent implements OnInit {

  datoscon;

  constructor(private con: FormBuilder) {
    this.datoscon = con.group({
      institucion: ['', Validators.required],
    });
   }

  ngOnInit() {}

}
