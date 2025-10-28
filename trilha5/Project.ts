class Project extends TaskManager {
  constructor(private projectName: string) {
    super();
  }

  addTask(task: string): void {
    const taskDescription = `[Projeto ${this.projectName}] ${task}`;
    if (this.tasks.has(taskDescription)) {
      console.log(`Tarefa "${task}" já existe neste projeto.`);
    } else {
      this.tasks.add(taskDescription);
      console.log(`Tarefa de projeto adicionada.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}
