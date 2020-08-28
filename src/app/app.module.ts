import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {ServicioService} from './services/servicio.service';
import { MenuDeOpcionesComponent } from './components/menu-de-opciones/menu-de-opciones.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuDeOpcionesComponent,
    HeroeComponent,
    ListaHeroesComponent,
    DetalleHeroeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
