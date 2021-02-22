import { Genero } from './genero.model'


export class Filme{

    id: number
    backdrop_path: string   //caminho para imagem de fundo
    original_title: string   //título do filme
    release_date: string  //data de lançamento
    poster_path: string   //caminho para imagem do poster
    overview: string   //resumo do filme
    genres: Genero    //genero do filme
    vote_average: number //media dos votos
    budget: number  //orçamento
}