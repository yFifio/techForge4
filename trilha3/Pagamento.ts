interface Pagamento {
  realizarPagamento(): void;
}

class PagamentoCartao implements Pagamento {
  constructor(private numeroCartao: string) {}

  realizarPagamento(): void {
    console.log(
      `Pagamento realizado com sucesso com o cartão: ${this.numeroCartao}`
    );
  }
}

class PagamentoBoleto implements Pagamento {
  realizarPagamento(): void {
    console.log("Pagamento com boleto realizado com sucesso.");
  }
}
