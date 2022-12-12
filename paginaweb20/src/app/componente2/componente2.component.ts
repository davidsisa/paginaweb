import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
 

  constructor( private router:Router) { }
nombre:any;
  ngOnInit(): void {
    
  }
  obtencion1(){
    this.nombre= localStorage.getItem('valor_nombre');
  }
  navegacion(){
    this.router.navigate(['web1'])
  }

}