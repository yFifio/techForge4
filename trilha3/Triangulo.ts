class Triangulo implements FiguraGeometrica {
  constructor(public base: number, public altura: number) {}

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}
