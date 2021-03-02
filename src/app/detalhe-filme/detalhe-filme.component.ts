import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';




import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';
import { FilmesBD } from '../filmesBD.model';
import { Resultado } from '../resultado.model';


@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})

@Input()
export class DetalheFilmeComponent implements OnInit {
  //id: Number

  quantidadevalor: any

  filmesalugados: any

  clientes: Array<Cliente>

  filmesBD: Array<FilmesBD>
  
  filme: Filme

  nomeCliente: String


  constructor(private filmeService: FilmeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.filmeService = filmeService
      
   }

  ngOnInit(): void {
    
    
    this.filmeService.consultarFilmePorId(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(data=>{
     this.filme = data
      
    })
    
   
  }
      
    

  retornaSrc(backdrop_path: string){
    if(backdrop_path != null){
      return 'https://image.tmdb.org/t/p/w500' + backdrop_path
    }
    
  }

  retornaPoster(poster_path: string){
    if(poster_path != null){
      return 'https://image.tmdb.org/t/p/w200' + poster_path
    }
  }


  verClientes(){
    this.filmeService.retornaClientes().subscribe(data=>{
      this.clientes = data

    })
  
  }

  verFilmes(){
    this.filmeService.retornaFilmes().subscribe(data => {
      this.filmesBD = data
    })
  }
  
  filmesAlugados(){
    this.filmeService.filmesAlugados().subscribe(data =>{
      this.filmesalugados = data
    })
  }

  quantidadeValor(){
    this.filmeService.quantidadeValor().subscribe(data =>{
      this.quantidadevalor = data 
      console.log(this.quantidadevalor)
    })

  }


  voltarHome(){
    
    this.router.navigate([''])
  }


}


