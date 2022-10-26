import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListamenuService } from '../../listamenu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listamenu = [];

  constructor(private  opciones: ListamenuService, private router: Router) { }



  ngOnInit() {
    this.listamenu = this.opciones.obtenerlistamenu();
  }



      onClick(pagina: string){

        this.router.navigate([pagina]);

      }

}
