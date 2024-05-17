export class TaskStatus {
  public readonly statusName: string;

  constructor(statusName: string) {
    this.statusName = statusName;
  }

  public toString(): string {
    return this.statusName;
  }
}
