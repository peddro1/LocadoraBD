
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-primeiro-filme',
  templateUrl: './primeiro-filme.component.html',
  styleUrls: ['./primeiro-filme.component.css']
})
export class PrimeiroFilmeComponent implements OnInit {
  
  
  id: number

  filme1: Filme

  filme2: Filme
  
  img_base = 'https://image.tmdb.org/t/p/w200'
  
  constructor(private filmeService: FilmeService, private router1: Router) {
      this.filmeService = filmeService;
   }

  ngOnInit(): void {
    this.filmeService.consultarFilmePorId(475557).subscribe(data=>{
      this.filme1 = data;
      
    }
    )

    this.filmeService.consultarFilmePorId(603).subscribe(data=>{
      this.filme2 = data;
      
    }
    )
    //window.document.getElementById('poster').setAttribute('src', 'https://image.tmdb.org/t/p/w200/8h0CG12Oft1GqthLmsctg8iuQQj.jpg')
  }

  consultarFilme() {
    this.filmeService.consultarFilmePorId(this.id).subscribe(data=>{
      this.filme1 = data;
      
    }
    
    ) 
  }
  
  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
  }
  retornaFundo(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w500' + poster_path
    }
  }

  irParaDetalhe(id: number){
    this.router1.navigate(['/detalhe/', id ])
  }

}
