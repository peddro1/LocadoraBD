import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  lancamentos: Resultado

  constructor(private filmeService: FilmeService, private router: Router) {
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

  irParaDetalhe(id: number){
    this.router.navigate(['/detalhe/', id ])
  }


}
