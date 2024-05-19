import { Module } from './Module.ts';
import { Task } from '../entities/Task.ts';
import { TaskStatus } from '../entities/TaskStatus.ts';
import { Filters } from '../lib/types.ts';

export class TasksManagement extends Module {
  public getAvailableTasks(): Task[] {
    return [...this._user.tasks]; // Copy
  }

  public sortTasksByDeadline(): Task[] {
    return this.getAvailableTasks().sort((a, b) => b.deadline.getTime() - a.deadline.getTime());
  }

  public filterTasks(filters: Filters): Task[] {
    let tasks = this.getAvailableTasks();

    for (const [filterName, predicate] of Object.entries(filters)) {
      tasks = tasks.filter((item) => predicate(item[filterName as keyof Task]));
    }

    return tasks;
  }

  public completeTask(task: Task): void {
    task.status = new TaskStatus('Completed');
  }
}
