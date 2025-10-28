const meuProjeto = new Project("Site E-commerce");
meuProjeto.addTask("Criar login");
meuProjeto.addTask("Criar carrinho");
meuProjeto.addTask("Criar login");

const minhasDiarias = new DailyTasks();
minhasDiarias.addTask("Revisar e-mails");
minhasDiarias.addTask("Fazer reunião");
minhasDiarias.addTask("Revisar e-mails");

console.log("\nTarefas do Projeto:", meuProjeto.listTasks());
console.log("Tarefas Diárias:", minhasDiarias.listTasks());

const armazem = new WarehouseInventory();
armazem.addItem("Caixa", 500);
armazem.addItem("Palete", 100);

const loja = new StoreInventory();
loja.addItem("Maçã", 5);
loja.addItem("Maçã", 8);
loja.addItem("Banana", 3);
loja.removeItem("Maçã");

console.log("\nInventário do Armazém:", armazem.getInventory());
console.log("Inventário da Loja:", loja.getInventory());

const meusFilmes = new MoviesFavoriteManager();
meusFilmes.addFavorite("Matrix");
meusFilmes.addFavorite("Duna");
meusFilmes.addFavorite("Interestelar");
meusFilmes.addFavorite("Duna");

console.log(
  "\nMeus Filmes Favoritos (Ordem Alfabética):",
  meusFilmes.getFavorites()
);

const meusLivros = new BooksFavoriteManager();
meusLivros.addFavorite("O Senhor dos Anéis");
meusLivros.addFavorite("1984");
meusLivros.addFavorite("O Guia do Mochileiro");

console.log(
  "\nMeus Livros Favoritos (Ordem de Inserção Inversa):",
  meusLivros.getFavorites()
);

const eleicao = new Election();
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");

console.log("\nResultado da Eleição (Contagem):", eleicao.getResults());

const enquete = new Poll();
enquete.voteFor("Opção 1");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 3");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 2");
enquete.voteFor("Opção 1");

console.log("\nResultado da Enquete (Ranking):", enquete.getResults());
