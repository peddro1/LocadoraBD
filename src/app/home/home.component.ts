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

          
          
          for(let i =0; i<window.document.getElementsByTagName('body').length; i++){
            
            window.document.getElementsByTagName('body')[i].style.color = 'white'
          }
          for(let i= 0; i<window.document.getElementsByTagName('section').length; i++){
            window.document.getElementsByTagName('section')[i].style.border = '3px solid yellow'
            window.document.getElementsByTagName('section')[i].style.background = 'black'
          }
          if(window.document.getElementById('botao')){

            window.document.getElementById('botao').style.background = '#FFFF00'
        

          }
          
        }else{
          
          
          
          for(let i =0; i<window.document.getElementsByTagName('body').length; i++){
            
            window.document.getElementsByTagName('body')[i].style.color = 'white'
          }

          for(let i= 0; i<window.document.getElementsByTagName('section').length; i++){
            window.document.getElementsByTagName('section')[i].style.border = ''
            window.document.getElementsByTagName('section')[i].style.background = 'rgb(4, 107, 110)'
          }
          if(window.document.getElementById('botao')){
            window.document.getElementById('botao').style.background = 'white'
            
          }
       
        }
      }
   
    )

    this.filmeService.fonteMaior.subscribe(
      function(tam){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){
          window.document.getElementsByTagName('label')[i].style.font = `normal ${tam+20}px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){
          window.document.getElementsByTagName('h1')[i].style.fontSize = `${tam+40}px`
        }
        
      }

    )


    this.filmeService.fonteNormal.subscribe(
      function(){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){
          window.document.getElementsByTagName('label')[i].style.font = `normal 18px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){
          window.document.getElementsByTagName('h1')[i].style.fontSize = '30px'
        }

      
      }

    )

    this.filmeService.fonteMenor.subscribe(
      function(tam){
        for(let i= 0; i<window.document.getElementsByTagName('label').length; i++){
          window.document.getElementsByTagName('label')[i].style.font = `normal ${20+tam}px Arial`
        }
        for(let i= 0; i<window.document.getElementsByTagName('h1').length; i++){
          window.document.getElementsByTagName('h1')[i].style.fontSize = `${30+tam}px`
        }

       
      }

    )
  }

  
}
