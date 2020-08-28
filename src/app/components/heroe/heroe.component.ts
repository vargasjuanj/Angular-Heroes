import { Component, OnInit, Input } from '@angular/core';
import { Entidad } from 'src/app/entities/entidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() element:Entidad
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
verDetalles(id:string){
  this.router.navigate(['detalle/'+id])
}
}
