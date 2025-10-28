class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    if (compromisso.trim() !== "") {
      this.compromissos.push(compromisso);
    }
  }

  listarCompromissos(): string[] {
    return this.compromissos;
  }
}
