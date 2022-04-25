import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
    // con esto capturo el id del heroe ya que la ruta que tiene el boton en la tarjeta de Heroe
    // dirigue a este componente
    this.activatedRoute.params.subscribe(({id})=>console.log(id));
  }

}
