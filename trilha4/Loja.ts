class Loja {
  private produtos: ProdutoLoja[];

  constructor(produtosIniciais: ProdutoLoja[]) {
    this.produtos = produtosIniciais;
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((produto) => produto.codigo === codigo);
  }
}
