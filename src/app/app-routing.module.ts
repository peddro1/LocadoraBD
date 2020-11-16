import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';
import { Teste2Component } from './teste2/teste2.component';


const routes: Routes = [
  { path:'detalhe/:id', component: DetalheFilmeComponent },
  { path:'teste2', component: Teste2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
