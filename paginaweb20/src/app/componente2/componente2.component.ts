import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
 

  constructor( private router:Router) { }

nombre1: any
email1: any
password: any
confirm: any
phone: any
  ngOnInit(): void {
    this.obtencion1()
  }
  obtencion1(){
    this.nombre1=localStorage.getItem('valor_nombre')
    this.email1=localStorage.getItem('valor_email')
    this.password=localStorage.getItem('valor_password')
    this.confirm=localStorage.getItem('valor_confirm')
    this.phone=localStorage.getItem('valor_phone')
   }



}