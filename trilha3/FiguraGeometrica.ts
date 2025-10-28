interface FiguraGeometrica {
  calcularArea(): number;
}

function imprimirAreas(formas: FiguraGeometrica[]): void {
  formas.forEach((forma) => {
    console.log(
      `A área do ${forma.constructor.name} é: ${forma
        .calcularArea()
        .toFixed(2)}`
    );
  });
}
