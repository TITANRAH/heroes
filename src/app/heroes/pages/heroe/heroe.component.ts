import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [

    `img {
      width: 100%;
      border-radius: 5px;
    }`
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {

    // con esto capturo el id del heroe ya que la ruta que tiene el boton en la tarjeta de Heroe
    // dirigue a este componente
    // switchMap recibe lo que el activatedRoute esta emitiendo
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id })  => this.heroesService.getHeroePorId(id) )
      )
    .subscribe( heroe => this.heroe = heroe)
  }

  regresar(){

    this.router.navigate(['/heroes/listado'])
  }

}
