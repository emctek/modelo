import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-bd',
  templateUrl: './bd.page.html',
  styleUrls: ['./bd.page.scss'],
})
export class BdPage implements OnInit {
datos;
  listainstituciones;

  constructor(private fb:FormBuilder, private servicio:ServicioService) { 
    this.datos = this.fb.group({
      id:['',Validators.required],
      Nombre:['',Validators.required]
    });
  }

  ngOnInit() {
    this.consultainstituciones();
  }

consultainstituciones(){
this.servicio.obtenerinstituciones().subscribe(
  res=>{
    this.listainstituciones=res;
    console.log(this.listainstituciones);
  },
  error=>console.log(error)

);
}

consultainstitucionid(){
  this.servicio.obtenerinstitucionid(this.datos.value.id).subscribe(
    res=>{
      this.listainstituciones=res;
      console.log(this.listainstituciones);
    },
    error=>console.log(error)
  
  );
  }



}
