class Passaro extends Animal {
  constructor() {
    super(50);
  }

  comer(): void {
    this.energia += 10;
  }
}
