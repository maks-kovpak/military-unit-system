import { TaskStatus } from './TaskStatus.ts';
import { User } from './User.ts';
import { BaseNotification } from './Notification.ts';
import { NotificationsManager } from './NotificationManager.ts';
import { NotificationType } from '../lib/enums.ts';
import { ITask } from '../interfaces/ITask.ts';

export class Task implements ITask {
  public readonly id: number;
  public name: string;
  public description: string;
  public assigner: User;
  public performer: User;
  public deadline: Date;
  public subtasks: Task[];
  private _status: TaskStatus;

  private _notificationsManager: NotificationsManager;

  constructor(taskData: ITask) {
    this.id = taskData.id;
    this.name = taskData.name;
    this.description = taskData.description;
    this.assigner = taskData.assigner;
    this.performer = taskData.performer;
    this.deadline = taskData.deadline;
    this._status = taskData.status;
    this.subtasks = taskData.subtasks;

    this._notificationsManager = new NotificationsManager();
    this._notificationsManager.addSubscribers([this.assigner, this.performer]);
  }

  public get status(): TaskStatus {
    return this._status;
  }

  public set status(value: TaskStatus) {
    this._notifyAboutStatusChange(this._status, value);
    this._status = value;
  }

  private _notifyAboutStatusChange(oldStatus: TaskStatus, newStatus: TaskStatus) {
    this._notificationsManager.notify(
      new BaseNotification({
        notificationType: NotificationType.Email,
        text: `"${this.name}": status '${oldStatus}' changed to '${newStatus}'`,
      })
    );
  }

  public remindAboutTerm(daysLeft: number): void {
    this._notificationsManager.notify(
      new BaseNotification({
        notificationType: NotificationType.Push,
        text: `"${this.name}" task ends in ${daysLeft} days!`,
      })
    );
  }
}
