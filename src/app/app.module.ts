import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroFilmeComponent } from './primeiro-filme/primeiro-filme.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';
import { PesquisaFilmeComponent } from './pesquisa-filme/pesquisa-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroFilmeComponent,
    DetalheFilmeComponent,
    PesquisaFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
