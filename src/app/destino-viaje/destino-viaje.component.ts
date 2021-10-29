import { Component, OnInit, Input } from '@angular/core';
import { DestinoViajeModels } from '../models/destino-viaje-models';

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
