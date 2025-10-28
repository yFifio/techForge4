class Circulo implements FiguraGeometrica {
  constructor(private raio: number) {}

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}
