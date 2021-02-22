import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';




import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';




@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  //id: Number


  
  
  
  
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

  alugarFilme(){
    //const db = require('src/conector')
    //const clientes = db.retornaCliente()
  

  }
  


  voltarHome(){
    
    this.router.navigate([''])
  }


}


