import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    console.log(heroe)
    // tomamos el objeto heroe y transformamos a respuesta de su Imagen
    // justamente el id es igual al nombre de su imagen
    // esto lo usamos en cualquier componente, en este caso en listado comopnent
    return `assets/heroes/${heroe.id}.jpg`;
  }

  // como el id es igual al nombre de la imagen ira a asset y buscara la imagen en base a ese nombre
}
