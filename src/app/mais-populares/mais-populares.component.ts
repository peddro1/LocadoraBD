
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-mais-populares',
  templateUrl: './mais-populares.component.html',
  styleUrls: ['./mais-populares.component.css'],
})
export class MaisPopularesComponent implements OnInit {

  filmesPopulares: Resultado
  
  hero: Observable<any>
 
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
