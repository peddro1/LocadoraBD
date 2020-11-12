import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme.model';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.css']
})
export class DetalheFilmeComponent implements OnInit {
  id: number

  filme: Filme

  img_base = 'https://image.tmdb.org/t/p/w500'

  constructor(private filmeService: FilmeService) {
      this.filmeService = filmeService
   }

  ngOnInit(): void {
  }

  mostrarDetalhe() {
    this.filmeService.consultarFilmePorId(this.id).subscribe(data=>{
     
      this.filme = data
      window.document.getElementById('backdrop').setAttribute('src',this.img_base + this.filme.backdrop_path)
      //window.document.getElementById('genero').innerText = this.filme.genres[0].name
      
      
      //this.filme.genres[0].name  -------------> retorna o nome do gênero

    }
    
    )  
  }

}
