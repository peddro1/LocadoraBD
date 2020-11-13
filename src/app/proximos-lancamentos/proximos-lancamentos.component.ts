import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-proximos-lancamentos',
  templateUrl: './proximos-lancamentos.component.html',
  styleUrls: ['./proximos-lancamentos.component.css']
})
export class ProximosLancamentosComponent implements OnInit {

  proxLancamentos: Resultado

  constructor(private filmeService: FilmeService) { 
    this.filmeService = filmeService
  }

  ngOnInit(): void {
    this.filmeService.retornaProxLancamentos().subscribe(dado=>{
      this.proxLancamentos = dado
    })
  }

  retornaSrc(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
    
  }

}
