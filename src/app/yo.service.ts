import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoService {

  constructor(private http:HttpClient) { }

obtenerinstituciones( ) :Observable <any> {
return this.http.get("http:localhost:3400/institucion/division/consulta_institucion");

}
}
