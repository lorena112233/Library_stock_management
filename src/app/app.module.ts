import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPublicacionesComponent } from './lista-publicaciones/lista-publicaciones.component';
import { NewPublicacionComponent } from './new-publicacion/new-publicacion.component';
import { EditPublicacionComponent } from './edit-publicacion/edit-publicacion.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaPublicacionesComponent,
    NewPublicacionComponent,
    EditPublicacionComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
