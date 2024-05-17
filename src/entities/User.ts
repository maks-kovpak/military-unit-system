import { INotificationsListener } from '../interfaces/INotificationListener.ts';
import { IUser } from '../interfaces/IUser.ts';
import { BaseNotification } from './Notification.ts';
import { UserAccessLevel } from '../lib/enums.ts';
import { Task } from './Task.ts';
import { Subdivision } from './Subdivision.ts';
import { UserWithoutId } from '../lib/types.ts';

export class User implements IUser, INotificationsListener {
  public readonly id: number;
  public firstName: string;
  public lastName: string;
  public position: string;
  public subdivision: Subdivision;

  private _accessLevel: UserAccessLevel;
  private _tasks: Task[] = [];

  constructor(userData: IUser & { accessLevel: UserAccessLevel }) {
    this.id = userData.id;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.position = userData.position;
    this.subdivision = userData.subdivision;

    this._accessLevel = userData.accessLevel;
  }

  public isAdmin(): boolean {
    return this._accessLevel === UserAccessLevel.Admin;
  }

  public get tasks(): Task[] {
    return this._tasks;
  }

  public addNewTask(task: Task): void {
    this._tasks.push(task);
  }

  public removeTask(task: Task): void {
    this._tasks = this._tasks.filter((t) => t.id === task.id);
  }

  public updateUserData(userData: Partial<UserWithoutId>): void {
    for (const [key, value] of Object.entries(userData)) {
      const attrName = key as keyof UserWithoutId;
      this[attrName] = value as string & Subdivision;
    }
  }

  public onNotify(notification: BaseNotification): void {
    notification.send();
  }

  public toString(): string {
    return `User<{ id: ${this.id}, name: ${this.firstName + ' ' + this.lastName} }>`;
  }
}
