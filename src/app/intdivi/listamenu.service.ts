import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListamenuService {

  listamenu = [
    {
      id: 1,
      opcion: 'Instituciones'
    },
    {
      id: 2,
      opcion: 'Divisiones'
    },
    {
      id: 3,
      opcion: 'Asignar Division'
    },
    {
      id: 4,
      opcion: 'Consultas'
    },
  ];

  constructor() {}

  obtenerlistamenu() {
    return this.listamenu;
  }
}
