
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AcessibilidadeComponent} from "../acessibilidade/acessibilidade.component"
import { __param } from 'tslib';

import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';
import { from } from 'rxjs';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-mais-populares',
  templateUrl: './mais-populares.component.html',
  styleUrls: ['./mais-populares.component.css'],
})
export class MaisPopularesComponent implements OnInit {

  filmesPopulares: Resultado
  
  id: number
 
  
  constructor(private filmeService: FilmeService, private router: Router) { 

    this.filmeService = filmeService

  }

  ngOnInit(): void {
    this.filmeService.retornarFilmesPopulares().subscribe(dado=>{
      this.filmesPopulares = dado
    })

    

  }

  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
    
  }

  irParaDetalhe(id: number){
    this.router.navigate(['/detalhe/', id ])

  }

 
  

}
