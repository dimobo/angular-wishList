import { Component, OnInit, Input } from '@angular/core';
import { DestinoViajeModel } from '../models/destino-viaje-model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css'],
})
export class DestinoViajeComponent implements OnInit {
  @Input() nombre: String[];
  constructor() {
    this.nombre = [];
  }

  ngOnInit(): void {}
}
