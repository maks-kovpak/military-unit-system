import { User } from '../entities/User.ts';

export abstract class Module {
  protected _requiredAdminAccess: boolean = false;

  protected _isAccessGranted(user: User): boolean {
    return user.isAdmin();
  }

  public displayForUser(user: User): void {
    if (this._requiredAdminAccess && !this._isAccessGranted(user)) {
      return;
    }

    console.log(`The module ${this.constructor.name} has been successfully displayed!`);
  }
}
