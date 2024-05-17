import { Subdivision } from './Subdivision.ts';
import { Tree } from '../lib/types.ts';

export class MilitaryUnitStructure {
  private _structure: Tree<Subdivision>;

  constructor(structureTree: Tree<Subdivision>) {
    this._structure = structureTree;
  }

  public getStructure(): Tree<Subdivision> {
    return this._structure;
  }

  public addNewSubdivision(subdivision: Subdivision, parent: Subdivision): void {
    console.log(`To '${parent}' added new '${subdivision}' subdivision!`);
    console.log(this._structure);
  }
}
