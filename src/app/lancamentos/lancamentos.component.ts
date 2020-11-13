import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  lancamentos: Resultado

  constructor(private filmeService: FilmeService) {
      this.filmeService = filmeService
   }

  ngOnInit(): void {
    this.filmeService.retornarLancamentos().subscribe(dado=>{
      this.lancamentos = dado
    })
  }

  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
    
  }

}
