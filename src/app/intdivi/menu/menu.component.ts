import { Component, OnInit } from '@angular/core';
import { ListamenuService } from 'src/app/intdivi/listamenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

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
