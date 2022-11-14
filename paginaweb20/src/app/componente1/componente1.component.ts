import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Componente2Component } from '../componente2/componente2.component';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  
  constructor(private routes:Router) { }

ngOnInit(): void {
 
}

navegacion(){
  this.routes.navigate(['web2'])
}


}
