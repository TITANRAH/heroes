import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`mat-card{
    margin-top: 20px;
  }`]
})
export class HeroeTarjetaComponent implements OnInit {

  // signo de admiracion quita el problema que da al usar el input()
  //esto es lo que necesito desde el listado, el ngfor que realiza con los heroes y lo enlazo con un [heroe] = "heroe" como
  //propiedad de el selector en listado(<app-Heroes-tarjeta [heroe] = "heroe"><app-Heroes-tarjeta>)
  //con input recibo el heroe
  //tambien puede ser  @Input() heroe!: Heroe | undefined
  @Input() heroe!: Heroe; 

  constructor() { }

  ngOnInit(): void {

    

  }

}
