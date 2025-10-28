class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigoBoleto = "12345.67890 98765.43210 12345.67890 1 99990000";
    console.log(`Gerando boleto com código: ${codigoBoleto}`);
    console.log("Aguardando pagamento do boleto.");
  }
}

function realizarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach((pagamento, index) => {
    console.log(`Processando pagamento #${index + 1}`);
    pagamento.processar();
    console.log("---");
  });
}
