import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-de-opciones',
  templateUrl: './menu-de-opciones.component.html',
  styleUrls: ['./menu-de-opciones.component.css']
})
export class MenuDeOpcionesComponent implements OnInit {

  buscado:string
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  buscar(){
this.router.navigate(['/home/'+this.buscado])
  }

}
