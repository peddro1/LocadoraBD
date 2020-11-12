import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';


const routes: Routes = [
  { path:"detalhe-filme", component: DetalheFilmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
