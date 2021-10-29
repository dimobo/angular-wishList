import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje-model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [];
  }

  guardar(n: string, d: string, u: string): boolean {
    // Con este if tratamos si la publicación en el tiene texto en el campo URL
    // Pero por ahora no esta discriminando si el texto es una imagen o no
    // Por lo que si escribimos texto que no es una URL a una imagen no se mostrara nada
    // Pero si escribimos una URL valida de una imagen si que la mostrara i en caso de que
    // No introduzcamos nada por defecto se quedara la imagen del placeholder.
    if (u == '') {
      u = 'https://placeimg.com/380/230/nature';
    }

    this.destinos.push(new DestinoViaje(n, d, u));
    return false;
  }

  ngOnInit(): void {}
}
