console.log("--- Exercício 1 ---");
const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover();
minhaBicicleta.mover();

console.log("\n--- Exercício 2 ---");
const formas: FiguraGeometrica[] = [
  new Circulo(10),
  new Quadrado(5),
  new Triangulo(4, 6),
];

imprimirAreas(formas);

console.log("\n--- Exercício 3 ---");
const listaPagamentos: Pagamento[] = [
  new PagamentoCartao("1111-2222-3333-4444"),
  new PagamentoBoleto(),
  new PagamentoCartao("5555-6666-7777-8888"),
];

listaPagamentos.forEach((p) => {
  p.realizarPagamento();
});

console.log("\n--- Exercício 4 ---");
const animais: Animal[] = [new Leao(), new Passaro()];

animais.forEach((animal) => {
  animal.statusEnergia();
  animal.comer();
  animal.statusEnergia();
  console.log("---");
});

console.log("\n--- Exercício 5 ---");
const listaFuncionarios: Funcionario[] = [
  new Gerente("Carlos Silva", 10000),
  new Operario("Maria Souza", 3000),
  new Gerente("João Pereira", 12000),
  new Operario("Ana Martins", 2500),
];

calcularSalarioComBonus(listaFuncionarios);
