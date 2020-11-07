import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../filme.model';

@Injectable()
export class FilmeService{

    httpclient: HttpClient;

    constructor(httpClient: HttpClient){
        this.httpclient = httpClient

    }

    consultarFilme(id: number){
        return this.httpclient.get<Filme>("https://api.themoviedb.org/3/movie/"+ id +"?api_key=371ce6e369192bb9b814d0cb4741a793")

    }

}