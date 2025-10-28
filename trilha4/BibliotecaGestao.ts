class BibliotecaGestao {
  private livros: LivroBiblioteca[];

  constructor(livrosIniciais: LivroBiblioteca[]) {
    this.livros = livrosIniciais;
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.genero === genero);
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.autor === autor);
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    const disponiveis = this.livros.filter((livro) => livro.disponivel);

    return disponiveis.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}
