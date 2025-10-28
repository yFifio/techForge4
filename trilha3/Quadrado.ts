class Quadrado implements FiguraGeometrica {
  constructor(private lado: number) {}

  calcularArea(): number {
    return this.lado * this.lado;
  }
}
