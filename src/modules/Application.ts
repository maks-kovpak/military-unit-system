import { IModule } from '../interfaces/IModule.ts';

export class Application {
  private _modules: IModule[] = [];

  public registerModule(module: IModule) {
    this._modules.push(module);
  }

  public run() {
    this._modules.forEach((module) => module.display());
    console.log('Application has been started!');
  }
}
