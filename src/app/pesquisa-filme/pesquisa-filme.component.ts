import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-pesquisa-filme',
  templateUrl: './pesquisa-filme.component.html',
  styleUrls: ['./pesquisa-filme.component.css']
})
export class PesquisaFilmeComponent implements OnInit {

  name: string

  result: Resultado

  

  constructor(private filmeService: FilmeService) { 
    this.filmeService = filmeService
  }

  ngOnInit(): void {
  }

  pesquisarFilme(){
    this.filmeService.consultarFilmePorNome(this.name).subscribe(dado=>{
      this.result = dado

      let imgStr = ''
      /*
      if(this.result?.total_results > 5){
        this.result.total_results = 5
      }
      */
      let post = document.getElementById('post')

      this.result.results.forEach(function(resultado){
        let src = 'https://image.tmdb.org/t/p/w200' + resultado.poster_path

        imgStr +=
        `
        <img src=${src}>
        `
      })

      post.innerHTML = imgStr
    
    })

  }

}
