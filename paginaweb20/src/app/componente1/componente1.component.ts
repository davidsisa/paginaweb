import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Componente2Component } from '../componente2/componente2.component';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  
  constructor(private router:Router) { }
numero:any;

ngOnInit(): void {

}
almacenar(){
localStorage.setItem('valor_obtenido1',this.numero);
}
navegacion(){
  this.router.navigate(['web2'])
}
navegacion1(){
  this.router.navigate(['web3'])
}

}
