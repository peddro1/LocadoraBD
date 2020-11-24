import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';
import { HomeComponent } from './home/home.component';
import { MaisPopularesComponent } from './mais-populares/mais-populares.component';
import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';


const routes: Routes = [
  { path:'detalhe/:id', component: DetalheFilmeComponent },
  { path:'pesquisa/:nome', component: PesquisaFilmeComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
