class Operario extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.salario * 0.05;
  }
}
