const item1 = new ItemLoja(1, "Teclado Mecânico", 150.0);
console.log(item1);

const meuTexto = new Texto("Nota Rápida", "Lembrar de comprar pão.");
console.log(meuTexto.exibir());

const listaDeProdutos: ProdutoLoja[] = [
  { codigo: 101, nome: "Monitor" },
  { codigo: 102, nome: "Mouse" },
  { codigo: 103, nome: "Webcam" },
];

const minhaLoja = new Loja(listaDeProdutos);

console.log("Buscando produto 102:");
console.log(minhaLoja.buscarProdutoPorCodigo(102));

console.log("Buscando produto 999:");
console.log(minhaLoja.buscarProdutoPorCodigo(999));

const acervoInicial: Livro[] = [
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true },
  { titulo: "1984", autor: "George Orwell", disponivel: false },
  { titulo: "Duna", autor: "Frank Herbert", disponivel: true },
];

const minhaBiblioteca = new Biblioteca(acervoInicial);
console.log("Livros disponíveis no acervo:");
console.log(minhaBiblioteca.buscarLivrosDisponiveis());

const acervoGestao: LivroBiblioteca[] = [
  {
    titulo: "Z - Fundação",
    autor: "Isaac Asimov",
    genero: "Ficção Científica",
    disponivel: true,
  },
  {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: false,
  },
  {
    titulo: "Eu, Robô",
    autor: "Isaac Asimov",
    genero: "Ficção Científica",
    disponivel: true,
  },
  {
    titulo: "A - O Silmarillion",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    disponivel: true,
  },
];

const biblioGestao = new BibliotecaGestao(acervoGestao);

console.log("Livros do gênero 'Ficção Científica':");
console.log(biblioGestao.filtrarPorGenero("Ficção Científica"));

console.log("Livros do autor 'J.R.R. Tolkien':");
console.log(biblioGestao.buscarPorAutor("J.R.R. Tolkien"));

console.log("Livros disponíveis (ordenados por título):");
console.log(biblioGestao.obterLivrosDisponiveisOrdenados());
