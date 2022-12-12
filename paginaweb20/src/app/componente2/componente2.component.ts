import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
 

  constructor( private router:Router) { }
dato1:any;
  ngOnInit(): void {
    
  }
  obtencion1(){
    this.dato1= localStorage.getItem('valor_obtenido1');
  }
  navegacion(){
    this.router.navigate(['web1'])
  }
}
