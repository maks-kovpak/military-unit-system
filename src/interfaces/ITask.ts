import { User } from '../entities/User.ts';
import { Task } from '../entities/Task.ts';
import { TaskStatus } from '../entities/TaskStatus.ts';

export interface ITask {
  id: number;
  name: string;
  description: string;
  assigner: User;
  performer: User;
  deadline: Date;
  status: TaskStatus;
  subtasks: Task[];
}
