import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css']
})
export class Teste1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  vaiPraTest2(){
    this.router.navigate(['/teste2'])

  }

}
