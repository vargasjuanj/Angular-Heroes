import { Injectable } from '@angular/core';
import * as  data from '../../assets/json/heroes.json'
import { Entidad } from '../entities/entidad';
// en tsconfig.base.json pegar esta propiedad en compilation unit debajo de eport ->     "resolveJsonModule": true, y cerrar y volver abrir ide
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
datos:any= (data as any).default
  constructor( ) { 
  //  console.log('datos')
    //console.log(this.datos)
  }

  filtrarPorEmpresa(casa:string):Entidad[]{
return this.datos.filter(element=>element.casa===casa)
  }
porPoderes(poderes:any[],buscado:string){
for(let poder of poderes){
if(poder.toLowerCase().includes(buscado)){
  return true;
}
}
}
  buscar(buscado:string):Entidad[]{
    buscado=buscado.toLowerCase()

let heroes=this.datos.filter(element=>{
  return element.casa.toLowerCase().includes(buscado) || element.bio.toLowerCase().includes(buscado)  || this.porPoderes(element.poderes,buscado)
})

return heroes

  }
  
  /*
  calcularPromedio(notas:any[]){
    return notas.reduce((anterior,actual)=>anterior+=actual)/notas.length
  }
  getOne(legajo:number){
return this.datos.find(element=>element.legajo==legajo)
  }
  buscarPorNombre(nombre:string){
    return this.datos.filter(element=>element.alumno.toLowerCase().includes(nombre.toLowerCase()))
  }
  
  buscarPorLegajo(legajo:number){ //la diferencia entre este y getOne, es que como este se va a utilizar en grilla, ncecesito devolver un array porque GrillAlumnos usa un array
  return this.datos.filter(element=>element.legajo==legajo) 

  
  }
  mejorAlumno(){
let promedios = this.datos.map(element=>this.calcularPromedio(element.notas))
let max= Math.max(...promedios)
return this.datos.find(element=>this.calcularPromedio(element.notas)==max)
  }
  */


  //cargar imagen  <img class="img-fluid" [src]="'assets/img/'+element.foto"/>

  //ruta detalle    <td><a [routerLink]="['/detalle/'+element.legajo]" routerLinkActive="router-link-active" >Detalles</a></td>

}
