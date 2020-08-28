import { Component, OnInit } from '@angular/core';
import { Entidad } from 'src/app/entities/entidad';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {
element:Entidad
  constructor(private servicio:ServicioService,private ruta:ActivatedRoute) { }

  ngOnInit(): void {
this.ruta.params.subscribe(params=>{
  this.element=this.servicio.datos.find(element=>element.id===params['id'])
})
  }
volver(){
  window.history.back()
}
}
