import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListamenuService {

  listamenu = [
    {
      id: 1,
      opcion: 'Nueva Institucion'
    },
    {
      id: 2,
      opcion: 'Nueva Division'
    },
    {
      id: 3,
      opcion: 'Asignar Division'
    },
    {
      id: 4,
      opcion: 'Consultas Institucion/Division'
    },
    {
      id: 5,
      opcion: 'Nuevo Posgrado'
    },
    {
      id: 6,
      opcion: 'Asignar Posgrado'
    },
    {
      id: 7,
      opcion: 'Consultas Posgrado'
    },
  ];

  constructor() {}

  obtenerlistamenu() {
    return this.listamenu;
  }
}
