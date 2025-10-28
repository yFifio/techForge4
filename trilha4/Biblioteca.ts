class Biblioteca {
  private acervo: Livro[];

  constructor(livrosIniciais: Livro[]) {
    this.acervo = livrosIniciais;
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.acervo.filter((livro) => livro.disponivel === true);
  }
}
