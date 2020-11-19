import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.css']
})
export class AcessibilidadeComponent implements OnInit {

  fonte = 0

  cont = 1
  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    
  }

  autoContraste(){
    this.filmeService.setContraste(this.cont++)
  }

  aumentoDeFonte(){
    this.filmeService.setFonteMaior(this.fonte += 3)
  }

  restaurarFonte(){
    this.filmeService.setFonteNormal(this.fonte = 0)
  }

  diminuicaoDeFonte(){
    this.filmeService.setFonteMenor(this.fonte -= 3)
  }

}
