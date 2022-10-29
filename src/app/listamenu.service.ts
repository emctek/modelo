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
      opcion: 'Modificar/Eliminar Institucion'
    },
    {
      id: 5,
      opcion: 'Modificar/Eliminar Division'
    },
    {
      id: 6,
      opcion: 'Modificar/Eliminar Asignacion de Division'
    },
    {
      id: 7,
      opcion: 'Consultas'
    },
  ];

  constructor() {}

  obtenerlistamenu() {
    return this.listamenu;
  }
}
