import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesService } from '../publicaciones.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Publicacion } from '../models/publicacion.model';

@Component({
  selector: 'app-edit-publicacion',
  templateUrl: './edit-publicacion.component.html',
  styleUrls: ['./edit-publicacion.component.css']
})
export class EditPublicacionComponent implements OnInit {

  formulario: FormGroup;
  errores: any;
  identificador: string;
  publicacion: Publicacion;


  constructor(private publicacionesService: PublicacionesService, private router: Router, private activatedRoute: ActivatedRoute) {
    
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      autor: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl(''),
      texto: new FormControl(''),
      activo: new FormControl(''),
    });
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.identificador = params.identificador;
      console.log(params.identificador);
      this.publicacionesService.getById(params.identificador).then(response => {
        console.log(response)
        this.publicacion = response;
        // Generamos el formulario a partir de los datos de la publicacion
        this.formulario = new FormGroup({
          titulo: new FormControl(this.publicacion.titulo),
          autor: new FormControl(this.publicacion.autor),
          fecha: new FormControl(this.publicacion.fecha),
          categoria: new FormControl(this.publicacion.categoria),
          texto: new FormControl(this.publicacion.texto),
          activo: new FormControl(this.publicacion.activo)
        })
      })
    })
  }

  enviarFormulario(values) {
    console.log(values);
    this.publicacionesService.update(this.identificador, this.formulario.value).then(response => {
      this.router.navigate(['/']);
    })
  }

  //lo unico diferente del getAll es que aqui le pasamos un parametro. por lo demas son igual. Les pasamos una promesa
  /*
  async envioFormulario() {
    console.log(this.formulario.value);
    console.log("------")
    try {
      let response = await this.publicacionesService.update(this._id, this.formulario.value);
      console.log(response)
      this.router.navigate(['/']);

    } catch (err) {
      console.log(err.error[0].msg)
      this.errores = err.error;
    }
    // this.publicacionesService.createNew(this.formulario.value) //devuelve una promesa, por lo que pongo abajo await y lo almaceno en otra variable,  y en la funcion arriba  async,
  }
*/

  hayError(control): string {
    let error = this.errores.find(item => item.param === control)
    if (error) {
      return error.msg
    } else {
      return "";
    }
  }

  inicio() {
    this.router.navigate(['/']);
  }
  crearPublicacion() {
    this.router.navigate(['/new']);
  }




}