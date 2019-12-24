import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../publicaciones.service';
import { Publicacion } from '../models/publicacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-publicaciones',
  templateUrl: './lista-publicaciones.component.html',
  styleUrls: ['./lista-publicaciones.component.css']
})
export class ListaPublicacionesComponent implements OnInit {

  arrayPublicaciones: Publicacion[];

  constructor(private publicacionesService: PublicacionesService, private router: Router) { 
    
  }

  ngOnInit() {
    this.recuperarPublicaciones()
  }

    //la peticion para borrar tiene que estar en el servicio
    eliminarPublicacion(publicacion) {
      this.publicacionesService.delete(publicacion).then(response => {
        console.log(response)
        this.recuperarPublicaciones()
  
      })
    }

  recuperarPublicaciones(){
    //this.studentService.getAll() //esto devuelve una Promse, tengo que tratarla
    this.publicacionesService.getAll().then(response => {
      console.log(response); //veo que me devuelve un array, por eso lo pongo:
      this.arrayPublicaciones = response;
    })
  }

  crearPublicacion(){
    this.router.navigate(['/new']);
  }



  editarPublicacion(){
    this.router.navigate(['/edit']);
  }



}
