import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PublicacionesService } from '../publicaciones.service';
import { Router } from '@angular/router';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Publicacion } from '../models/publicacion.model';

@Component({
  selector: 'app-new-publicacion',
  templateUrl: './new-publicacion.component.html',
  styleUrls: ['./new-publicacion.component.css']
})
export class NewPublicacionComponent implements OnInit {

  formulario: FormGroup;
  errores: any;
  fechaActual: Date;

  constructor(private publicacionesService: PublicacionesService, private router: Router) { 
    this.fechaActual = new Date();
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      autor: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl(''),
      texto: new FormControl(''),
      activo: new FormControl('')
    }); 
   }

  ngOnInit() {
  }

    //lo unico diferente del getAll es que aqui le pasamos un parametro. por lo demas son igual. Les pasamos una promesa
    async envioFormulario(){
      console.log(this.formulario.value);
      console.log("------")
      try{
        let response = await this.publicacionesService.createNew(this.formulario.value);
        console.log(response)
        this.router.navigate(['/']);
  
      } catch(err){
        console.log(err.error[0].msg)
        this.errores = err.error;
      }
      // this.publicacionesService.createNew(this.formulario.value) //devuelve una promesa, por lo que pongo abajo await y lo almaceno en otra variable,  y en la funcion arriba  async,
    }
    
  
    hayError(control): string {
      let error = this.errores.find(item => item.param === control)
      if (error) {
        return error.msg
      } else {
        return "";
      }
    }
    

    inicio(){
      this.router.navigate(['/']);
    }

    //marcarActivo(publicacion: Publicacion){
      //publicacion.activo = !publicacion.activo
    //}

}
