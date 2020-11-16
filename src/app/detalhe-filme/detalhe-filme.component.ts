import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


  constructor(private filmeService: FilmeService,
    //private activatedRoute: ActivatedRoute
    ) {
      this.filmeService = filmeService
      //console.log(this.activatedRoute)
   }

  ngOnInit(): void {
    
    /*
    this.filmeService.consultarFilmePorId().subscribe(data=>{
     this.filme = data
      
    })
    */
   
   

  }
      
    

  retornaSrc(backdrop_path: string){
    if(backdrop_path != null){
      return 'https://image.tmdb.org/t/p/w500' + backdrop_path
    }


    
  }

}
