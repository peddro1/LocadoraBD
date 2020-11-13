import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-melhores-avaliacoes',
  templateUrl: './melhores-avaliacoes.component.html',
  styleUrls: ['./melhores-avaliacoes.component.css']
})
export class MelhoresAvaliacoesComponent implements OnInit {

  melhoresFilmes: Resultado

  constructor(private filmeService: FilmeService) {
      this.filmeService = filmeService 
   }

  ngOnInit(){
    this.filmeService.retornaTopAvaliacoes().subscribe(dado=>{
      this.melhoresFilmes = dado

    })
    
  }

  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
    
  }

}
