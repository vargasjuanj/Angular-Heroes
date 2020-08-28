import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes: Routes = [
  {path:'',component:ListaHeroesComponent },
  {path:'home/:casa', component: ListaHeroesComponent},
  {path:'detalle/:id', component: DetalleHeroeComponent},
  {path:'heroe', component: HeroeComponent},
  {path:'**', pathMatch:"full", redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
