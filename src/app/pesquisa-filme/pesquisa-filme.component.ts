import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  constructor(private filmeService: FilmeService, private router: Router) { 
    this.filmeService = filmeService
  }

  ngOnInit(): void {

  }

 
  
  pesquisarFilme(){
    this.filmeService.consultarFilmePorNome(this.name).subscribe(dado=>{
      this.result = dado
    }
    )
   
   
  }


  enter(){
    window.document.addEventListener('keypress',(event)=>{
      const keyName = event.key
      if(keyName === "Enter"){
        this.pesquisarFilme()
      }
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
