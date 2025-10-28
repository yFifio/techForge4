abstract class Funcionario {
  constructor(protected nome: string, protected salario: number) {}

  public getNome(): string {
    return this.nome;
  }

  public getSalario(): number {
    return this.salario;
  }

  abstract calcularBonus(): number;
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((func) => {
    const bonus = func.calcularBonus();
    const salarioFinal = func.getSalario() + bonus;
    console.log(
      `Funcionário: ${func.getNome()} (${
        func.constructor.name
      })\n    Salário Base: R$${func
        .getSalario()
        .toFixed(2)}\n    Bônus: R$${bonus.toFixed(
        2
      )}\n    Salário Final: R$${salarioFinal.toFixed(2)}\n---`
    );
  });
}
