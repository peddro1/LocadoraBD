
import { Component, OnInit } from '@angular/core';

import { Filme } from '../filme.model';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-primeiro-filme',
  templateUrl: './primeiro-filme.component.html',
  styleUrls: ['./primeiro-filme.component.css']
})
export class PrimeiroFilmeComponent implements OnInit {
  id: number
  filme: Filme
  
  constructor(private filmeService: FilmeService) {
      this.filmeService = filmeService;
   }

  ngOnInit(): void {
  }

  consultarFilme() {
    this.filmeService.consultarFilme(this.id).subscribe(data=>{
      this.filme = data;
      var img = window.document.getElementById('poster').setAttribute('src','https://image.tmdb.org/t/p/w200' + this.filme.poster_path)

    }
    
    )  
  }
  setImagem(){
    
  }

}
