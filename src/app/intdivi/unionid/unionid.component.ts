import { Component, OnInit } from '@angular/core';
import { ListamenuService } from 'src/app/listamenu.service';

@Component({
  selector: 'app-unionid',
  templateUrl: './unionid.component.html',
  styleUrls: ['./unionid.component.scss'],
})
export class UnionidComponent implements OnInit {

  listamenu = [];

  caso: number;
  titulo: string;

  constructor(private  opciones: ListamenuService) { }



  ngOnInit() {
    this.listamenu = this.opciones.obtenerlistamenu();
  }



      onClick(id: number, opcion: string){

        this.caso = id;
        this.titulo = opcion;

      }

}
