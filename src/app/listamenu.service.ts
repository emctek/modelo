import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListamenuService {

  listamenu = [
    {
      id: 1,
      opcion: 'Nueva Institucion',
      pagina: 'inicio/Nueva-Institucion'

    },
    {
      id: 2,
      opcion: 'Nueva Division',
      pagina: 'inicio/Nueva-Division'

    },
    {
      id: 3,
      opcion: 'Asignar Division',
      pagina: 'inicio/Nueva-Division-Asignada'

    },
    {
      id: 4,
      opcion: 'Modificar/Eliminar Institucion',
      pagina: 'inicio/Modificar-Eliminar-Instirucion'

    },
    {
      id: 5,
      opcion: 'Modificar/Eliminar Division',
      pagina: 'inicio/Modificar-Eliminar-Division'

    },
    {
      id: 6,
      opcion: 'Modificar/Eliminar Asignacion de Division',
      pagina: 'inicio/Modificar-Eliminar-Division-Asignacion'

    },
    {
      id: 7,
      opcion: 'Consultas',
      pagina: 'inicio/Consultas'
    },
  ];

  constructor() {}

  obtenerlistamenu() {
    return this.listamenu;
  }
}
