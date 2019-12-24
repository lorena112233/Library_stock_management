import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPublicacionesComponent } from './lista-publicaciones/lista-publicaciones.component';
import { NewPublicacionComponent } from './new-publicacion/new-publicacion.component';
import { EditPublicacionComponent } from './edit-publicacion/edit-publicacion.component';

const routes: Routes = [
  { path: '', component: ListaPublicacionesComponent, pathMatch: 'full' },
  { path: 'new', component: NewPublicacionComponent },
  { path: 'edit/:identificador', component: EditPublicacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
