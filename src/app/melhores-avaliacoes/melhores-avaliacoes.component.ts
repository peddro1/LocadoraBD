import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-melhores-avaliacoes',
  templateUrl: './melhores-avaliacoes.component.html',
  styleUrls: ['./melhores-avaliacoes.component.css']
})
export class MelhoresAvaliacoesComponent implements OnInit {

  melhoresFilmes: Resultado

  constructor(private filmeService: FilmeService, private router: Router) {
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

  irParaDetalhe(id: number){
    this.router.navigate(['/detalhe/', id ])
  }

}
