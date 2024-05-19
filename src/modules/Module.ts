import { User } from '../entities/User.ts';

export abstract class Module {
  protected _requiredAdminAccess: boolean = false;
  protected _user: User;

  constructor(user: User) {
    this._user = user;
  }

  protected _isAccessGranted(): boolean {
    return this._user.isAdmin();
  }

  public displayForUser(): void {
    if (this._requiredAdminAccess && !this._isAccessGranted()) {
      return;
    }

    console.log(`The module ${this.constructor.name} has been successfully displayed!`);
  }
}
