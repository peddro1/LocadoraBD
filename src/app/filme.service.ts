import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Cliente } from './cliente.model';
import { Filme } from './filme.model';
import { FilmesBD } from './filmesBD.model';
import { Resultado } from './resultado.model';

@Injectable()
export class FilmeService{

    fonteNormal = new EventEmitter

    fonteMenor = new EventEmitter

    fonteMaior = new EventEmitter

    constraste = new EventEmitter

    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient

    }

    consultarFilmePorId(id: number){
        return this.httpClient.get<Filme>("https://api.themoviedb.org/3/movie/"+ id +"?api_key=371ce6e369192bb9b814d0cb4741a793")

    }

    consultarFilmePorNome(name: string){
        return this.httpClient.get<Resultado>("https://api.themoviedb.org/3/search/movie?api_key=371ce6e369192bb9b814d0cb4741a793&query=" + name)
    }

    retornaTopAvaliacoes(){
        return this.httpClient.get<Resultado>('https://api.themoviedb.org/3/movie/top_rated?api_key=371ce6e369192bb9b814d0cb4741a793')
    }

    retornarFilmesPopulares(){
        return this.httpClient.get<Resultado>('https://api.themoviedb.org/3/movie/popular?api_key=371ce6e369192bb9b814d0cb4741a793')
    }

    retornarLancamentos(){
        return this.httpClient.get<Resultado>('https://api.themoviedb.org/3/movie/now_playing?api_key=371ce6e369192bb9b814d0cb4741a793')
    }

    retornaProxLancamentos(){
        return this.httpClient.get<Resultado>('https://api.themoviedb.org/3/movie/upcoming?api_key=371ce6e369192bb9b814d0cb4741a793')
    }

    retornaClientes(){
        return this.httpClient.get<Array<Cliente>>('http://localhost:3000/retornaClientes')
        
    } 

    retornaFilmes(){
        return this.httpClient.get<Array<FilmesBD>>('http://localhost:3000/retornaFilmes')
    }

    filmesAlugados(){
        return this.httpClient.get<any>("http://localhost:3000/filmesAlugados")
    }

    quantidadeValor(){
        return this.httpClient.get<any>("http://localhost:3000/quantidadeValor")
    }

    setContraste(valor){
        this.constraste.emit(valor%2==1?1:0)
    }

    setFonteMaior(valor){
        this.fonteMaior.emit(valor)
    }

    setFonteNormal(valor){
        this.fonteNormal.emit(valor)
    }

    setFonteMenor(valor){
        this.fonteMenor.emit(valor)
    }
}