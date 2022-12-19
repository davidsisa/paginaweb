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
nombre:any;
email: any;
password:any;
confirm:any;
phone:any;
ngOnInit(): void {

}
almacenar(){

localStorage.setItem('valor_nombre',this.nombre);
localStorage.setItem('valor_email',this.email);
localStorage.setItem('valor_password',this.password);
localStorage.setItem('valor_confirm',this.confirm);
localStorage.setItem('valor_phone',this.phone);
this.router.navigate(['web2'])
}



navegacion1(){
  this.router.navigate(['web3'])
}

}
