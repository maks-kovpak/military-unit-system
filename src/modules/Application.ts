import { User } from '../entities/User.ts';
import { Module } from './Module.ts';

export class Application {
  private _modules: Module[] = [];
  private _user: User;

  constructor(user: User) {
    this._user = user;
  }

  public registerModule(ModuleClass: { new (user: User): Module }) {
    this._modules.push(new ModuleClass(this._user));
  }

  public run() {
    this._modules.forEach((module) => module.displayForUser());
    console.log('Application has been started!');
  }
}
