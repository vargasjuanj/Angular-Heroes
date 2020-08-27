import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import {ServicioService} from './services/servicio.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent


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
