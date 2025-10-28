abstract class Animal {
  protected energia: number;

  constructor(energia: number) {
    this.energia = energia;
  }

  abstract comer(): void;

  statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}
