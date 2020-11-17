import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Resultado } from '../resultado.model';

@Component({
  selector: 'app-proximos-lancamentos',
  templateUrl: './proximos-lancamentos.component.html',
  styleUrls: ['./proximos-lancamentos.component.css']
})
export class ProximosLancamentosComponent implements OnInit {

  proxLancamentos: Resultado

  constructor(private filmeService: FilmeService, private router: Router) { 
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

  irParaDetalhe(id: number){
    this.router.navigate(['/detalhe/', id ])
  }


}
