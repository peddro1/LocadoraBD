import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from './filme.model';
import { Resultado } from './resultado.model';

@Injectable()
export class FilmeService{

    

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient

    }

    consultarFilmePorId(id: number){
        return this.httpClient.get<Filme>("https://api.themoviedb.org/3/movie/"+ id +"?api_key=371ce6e369192bb9b814d0cb4741a793")

    }

    consultarFilmePorNome(name: string){
        return this.httpClient.get<Resultado>("https://api.themoviedb.org/3/search/movie?api_key=371ce6e369192bb9b814d0cb4741a793&query=" + name)
    }

}