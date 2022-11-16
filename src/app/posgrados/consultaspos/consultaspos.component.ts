import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultaspos',
  templateUrl: './consultaspos.component.html',
  styleUrls: ['./consultaspos.component.scss'],
})
export class ConsultasposComponent implements OnInit {

  datosconpos;

  constructor(private conpos: FormBuilder) {
    this.datosconpos = conpos.group({
      institucion: ['', Validators.required],
    });
   }

  ngOnInit() {}

}
