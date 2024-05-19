import { User } from '../entities/User.ts';
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
}
