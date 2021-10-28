import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
})
export class ListaDestinosComponent implements OnInit {
  destinos: String[][];
  constructor() {
    this.destinos = [
      ['Tortosa', 'Description placehodler 1'],
      ['Reus', 'Description placehodler 2'],
      ['Sant Jaume', 'Description placehodler 3'],
      ['Amposta', 'Description placehodler 4'],
    ];
  }

  ngOnInit(): void {}
}
