class DailyTasks extends TaskManager {
  addTask(task: string): void {
    const taskDescription = `[Diária] ${task}`;
    if (this.tasks.has(taskDescription)) {
      console.log(`Tarefa "${task}" já existe nas tarefas diárias.`);
    } else {
      this.tasks.add(taskDescription);
      console.log(`Tarefa diária adicionada.`);
    }
  }

  listTasks(): string[] {
    return Array.from(this.tasks);
  }
}
