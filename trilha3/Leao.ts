class Leao extends Animal {
  constructor() {
    super(100);
  }

  comer(): void {
    this.energia += 25;
  }
}
