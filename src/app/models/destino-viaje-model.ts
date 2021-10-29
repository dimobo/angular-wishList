export class DestinoViaje {
  private selected: boolean = false;
  constructor(
    public nombre: string,
    public descripcion: string,
    public imagenUrl: string
  ) {}

  isSelected() {
    return this.selected;
  }

  setSelected(s: boolean) {
    this.selected = s;
  }
}
