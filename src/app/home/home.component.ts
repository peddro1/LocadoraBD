import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilmeService } from '../filme.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {

    this.filmeService.constraste.subscribe(
      
      function(num){
        if(num == 1){

          
          
          for(let i =0; i<window.document.getElementsByTagName('body').length; i++){ // letras em branco
            
            window.document.getElementsByTagName('body')[i].style.color = 'white'
          }
          for(let i= 0; i<window.document.getElementsByTagName('section').length; i++){  //section clicavel com borda amarela e fundo preto
            window.document.getElementsByTagName('section')[i].style.border = '3px solid yellow'
            window.document.getElementsByTagName('section')[i].style.background = 'black'
          }
          if(window.document.getElementById('botao')){          //fundo amarelo no botao de pesquisa

            window.document.getElementById('botao').style.background = '#FFFF00'

          }else if(window.document.getElementById('voltar')){           //fundo amarelo no botao de voltar
            window.document.getElementById('voltar').style.background = '#FFFF00'
          }
          if(window.document.getElementById("detalhe")){               //borda branca tela de detalhe
            window.document.getElementById('detalhe').style.border = '3px solid white'
          }
          
        }else{
          
          for(let i =0; i<window.document.getElementsByTagName('body').length; i++){    //letras em branco
            
            window.document.getElementsByTagName('body')[i].style.color = 'white'
          }

          for(let i= 0; i<window.document.getElementsByTagName('section').length; i++){  //section sem borda e cor azul/verde
            window.document.getElementsByTagName('section')[i].style.border = ''
            window.document.getElementsByTagName('section')[i].style.background = 'rgb(4, 107, 110)'
          }
          if(window.document.getElementById('botao')){                   //fundo branco botao de pesquisa
            window.document.getElementById('botao').style.background = 'white'
             
          }else if(window.document.getElementById('voltar')){                  // fundo branco botao de voltar
            window.document.getElementById('voltar').style.background = 'white'
          }

          if(window.document.getElementById("detalhe")){                  // sem borda na tela de detalhe
            window.document.getElementById('detalhe').style.border = ''
          }
       
        }
      }
   
    )

    this.filmeService.fonteMaior.subscribe(
      function(tam){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){   //aumento de fonte das labels
          window.document.getElementsByTagName('label')[i].style.font = `normal ${tam+20}px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){    // aumento de fonte dos h1
          window.document.getElementsByTagName('h1')[i].style.fontSize = `${tam+30}px`
        }

        if(window.document.getElementById('botao')){                             // aumento de fonte do botao pesquisa 
          window.document.getElementById('botao').style.fontSize = `${12 + tam}px`
          window.document.getElementById('consulta').style.fontSize = `${12 + tam}px`

        }else if(window.document.getElementById('voltar')){                    //aumento de fonte do botao voltar
          window.document.getElementById('voltar').style.fontSize = `${12 + tam}px`
        }


        
      }

    )


    this.filmeService.fonteNormal.subscribe(
      function(){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){    //restaura de fonte das labels
          window.document.getElementsByTagName('label')[i].style.font = `normal 18px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){       // restaura de fonte dos h1
          window.document.getElementsByTagName('h1')[i].style.fontSize = '30px'
        }

        if(window.document.getElementById('botao')){                            // restaura de fonte do botao pesquisa 
          window.document.getElementById('botao').style.fontSize = `${13}px`
          window.document.getElementById('consulta').style.fontSize = `${13}px`
           
        }else if(window.document.getElementById('voltar')){                     //restaura de fonte do botao voltar
          window.document.getElementById('voltar').style.fontSize = `${13}px`
        }


      
      }

    )

    this.filmeService.fonteMenor.subscribe(
      function(tam){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){           //diminuição de fonte das labels
          window.document.getElementsByTagName('label')[i].style.font = `normal ${20+tam}px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){          //diminuição de fonte dos h1
          window.document.getElementsByTagName('h1')[i].style.fontSize = `${30+tam}px`
        }

        if(window.document.getElementById('botao')){                     // diminuição de fonte do botao pesquisa 
          window.document.getElementById('botao').style.fontSize = `${12 + tam}px`
          window.document.getElementById('consulta').style.fontSize = `${12 + tam}px`
           
        }else if(window.document.getElementById('voltar')){                     //diminuição de fonte do botao voltar
          window.document.getElementById('voltar').style.fontSize = `${12 + tam}px`
        }
       
      }

    )
  }

  
}
