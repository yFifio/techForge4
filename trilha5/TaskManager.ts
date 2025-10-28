abstract class TaskManager {
  protected tasks: Set<string> = new Set();

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}
