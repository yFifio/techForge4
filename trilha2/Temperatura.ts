class Temperatura {
  valorCelsius: number;

  constructor(valorCelsius: number) {
    this.valorCelsius = valorCelsius;
  }

  paraFahrenheit(): number {
    return (this.valorCelsius * 9) / 5 + 32;
  }

  paraKelvin(): number {
    return this.valorCelsius + 273.15;
  }
}
