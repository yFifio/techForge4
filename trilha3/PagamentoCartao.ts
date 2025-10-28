class PagamentoCartao extends Pagamento {
  constructor(private numeroCartao: string) {
    super();
  }

  processar(): void {
    console.log(`Validando cartão ${this.numeroCartao}...`);
    console.log("Pagamento com cartão APROVADO.");
  }
}
