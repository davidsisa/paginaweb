import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Componente2Component } from '../componente2/componente2.component';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  cualquiera;
  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
      this.cualquiera = Componente2Component [+params.get('NO CE QUE DECIR')] 
  });
  }




}
