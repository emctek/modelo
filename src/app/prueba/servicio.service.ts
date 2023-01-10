import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
url = 'http://localhost:3400/institucion/division/consulta_institucion';

  constructor(private http:HttpClient) { }

obtenerinstituciones( ):Observable <any> {
return this.http.get(this.url);

}

obtenerinstitucionid(id ):Observable <any> {
  return this.http.get(this.url+'/'+id);
  
  }



}

