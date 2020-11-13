
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
  
  router: Router
  id: number

  filme: Filme
  
  img_base = 'https://image.tmdb.org/t/p/w200'
  
  constructor(private filmeService: FilmeService) {
      this.filmeService = filmeService;
   }

  ngOnInit(): void {
    window.document.getElementById('poster').setAttribute('src', 'https://image.tmdb.org/t/p/w200/8h0CG12Oft1GqthLmsctg8iuQQj.jpg')
  }

  consultarFilme() {
    this.filmeService.consultarFilmePorId(this.id).subscribe(data=>{
      this.filme = data;
      //window.document.getElementById('poster').setAttribute('src', this.img_base + this.filme.poster_path)
      //window.document.getElementById('backdrop').setAttribute('src', 'https://image.tmdb.org/t/p/w500' + this.filme.backdrop_path)   
      //https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg

    }
    
    )  
  }
  
  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
  }

}
