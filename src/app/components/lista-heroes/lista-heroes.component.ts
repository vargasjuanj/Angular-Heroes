import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import {Entidad} from 'src/app/entities/entidad'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  constructor(public servicio:ServicioService, private ruta:ActivatedRoute) { }
datos:Entidad[]
  ngOnInit(): void {
this.ruta.params.subscribe(params=>{
  let param=params['casa']
  if(param ==undefined){
    this.datos=this.servicio.datos
  }else if (param === 'DC'){
    this.datos=this.servicio.filtrarPorEmpresa(param)
  }else if(param === 'Marvel'){
    this.datos=this.servicio.filtrarPorEmpresa(param)
  }else{
    this.datos=this.servicio.buscar(param)
  }
})
  }

}
