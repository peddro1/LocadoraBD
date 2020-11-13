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
      
      /*
      if(this.result?.total_results > 5){
        this.result.total_results = 5
      }
      */
     

      /*
      this.result.results.forEach(function(resultado){
        let scrBase = 'https://image.tmdb.org/t/p/w200'

        let src = scrBase + resultado.poster_path

        imgStr +=
        `
          <img src=${src}>
        <div>
          <p id = 'title'>${resultado.original_title}</p>
          <label><p>${resultado.release_date}</p></label>
        </div>

        `
      })

      //post.innerHTML = imgStr
      */

      
    })

  }

  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
    
  }

}
