interface Veiculo {
  mover(): void;
}

class Carro implements Veiculo {
  mover(): void {
    console.log("O carro está se movendo na estrada.");
  }
}

class Bicicleta implements Veiculo {
  mover(): void {
    console.log("A bicicleta está se movendo na ciclovia.");
  }
}
