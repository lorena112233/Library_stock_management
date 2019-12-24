import { Publicacion } from './models/publicacion.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {


  baseUrl: string;


  constructor(private http: HttpClient, private router: Router) { 
    this.baseUrl = 'http://localhost:3000/api/publicaciones'
  }

  //si me devuelve un array, pongo un array, si me devolviera un objeto, pondria un objeto en lugar de un array
  getAll(): Promise<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.baseUrl).toPromise();
    //desde el this-----baseUrl, me devolveria un observable, que podria acceder mediante subscribe()
    //pero queda mejor ponerlo como una promesa
  }

    //igual que el get, pero le decimos el objeto asociado (igual al que usamos en el postman, porque es el formato/valores que nodejs espera recibir)
    createNew(objetoValues): Promise<Publicacion> {
      return this.http.post<Publicacion>(this.baseUrl, objetoValues).toPromise();
  
    }

    delete(publicacion): Promise<Publicacion> {
      console.log(publicacion._id)
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: {
          publicacionId: publicacion._id
        }
      };
      return this.http.delete<Publicacion>(this.baseUrl, httpOptions).toPromise();
    }

      //el metodo que recibe _publicacionId_ con el id studiente a editar y _valuesAEditar_ con los nuevos datos del estudiante
  update(publicacionId, valuesAEditar): Promise<Publicacion> {
    //le paso el this.baseUrl, el servidor espera un objeto tipo Publicacion con {publicacionId, nombre, apellidos...etc}
    valuesAEditar.publicacionId = publicacionId;
    return this.http.put<Publicacion>(this.baseUrl, valuesAEditar).toPromise();
  }

  getById(publicacionId): Promise<Publicacion> {
    //le agrego a la url que yo le pase el id para buscar de uno en uno
    return this.http.get<Publicacion>(this.baseUrl + '/' + publicacionId).toPromise();
  }

  inicio(){
    this.router.navigate(['/']);
  }


}
