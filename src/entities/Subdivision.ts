import { User } from './User.ts';

export class Subdivision {
  public readonly name: string;
  private _members: User[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public get members(): User[] {
    return this._members;
  }

  public addNewMember(user: User): void {
    this._members.push(user);
  }
}
