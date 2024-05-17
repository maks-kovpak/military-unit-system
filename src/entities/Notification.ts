import { NotificationType } from '../lib/enums.ts';
import { INotification } from '../interfaces/INotification.ts';

export class BaseNotification implements INotification {
  public notificationType: NotificationType;
  public text: string;
  private _sendingTime: Date;

  constructor(notificationData: INotification) {
    this.notificationType = notificationData.notificationType;
    this.text = notificationData.text;
    this._sendingTime = new Date();
  }

  public send(): void {
    this._sendingTime = new Date();
    console.log(this.toString());
  }

  public toString(): string {
    return `Notification<{ text: '${this.text}', time: ${this._sendingTime} }>`;
  }
}
