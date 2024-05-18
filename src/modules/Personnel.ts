import { User } from '../entities/User.ts';
import { Task } from '../entities/Task.ts';
import { MilitaryUnitStructure } from '../entities/MilitaryUnitStructure.ts';
import { Subdivision } from '../entities/Subdivision.ts';
import { Module } from './Module.ts';

export class Personnel extends Module {
  private _personnelList: User[] = [];

  public addNewPerson(person: User): void {
    this._personnelList.push(person);
  }

  public deletePerson(person: User): void {
    this._personnelList = this._personnelList.filter((item) => item.id !== person.id);
  }

  public getMilitaryUnitStructure(): MilitaryUnitStructure {
    return new MilitaryUnitStructure({
      value: new Subdivision('Main Department'),
      children: [
        { value: new Subdivision('Department №1'), children: [] },
        {
          value: new Subdivision('Department №2'),
          children: [
            {
              value: new Subdivision('Department №2.1'),
              children: [],
            },
          ],
        },
      ],
    });
  }

  public getAvailableTasks(): Task[] {
    const tasks: Task[] = [];

    for (const person of this._personnelList) {
      for (const task of person.tasks) {
        if (task.assigner.id === person.id) {
          tasks.push(task);
        }
      }
    }

    return tasks;
  }
}
