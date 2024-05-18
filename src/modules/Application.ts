import { User } from '../entities/User.ts';
import { Module } from './Module.ts';

export class Application {
  private _modules: Module[] = [];
  private _user: User;

  constructor(user: User) {
    this._user = user;
  }

  public registerModule(moduleClass: { new (): Module }) {
    this._modules.push(new moduleClass());
  }

  public run() {
    this._modules.forEach((module) => module.displayForUser(this._user));
    console.log('Application has been started!');
  }
}
