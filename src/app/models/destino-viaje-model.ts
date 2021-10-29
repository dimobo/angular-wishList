export class DestinoViaje {
  nombre: string;
  descripcion: string;
  imagenUrl: string;

  constructor(n: string, d: string, u: string) {
    this.nombre = n;
    this.descripcion = d;
    this.imagenUrl = u;
  }
}
