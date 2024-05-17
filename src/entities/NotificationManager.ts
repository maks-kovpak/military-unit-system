import { INotificationsListener } from '../interfaces/INotificationListener.ts';
import { BaseNotification } from './Notification.ts';

export class NotificationsManager {
  private _subscribers: INotificationsListener[] = [];

  public addSubscribers(subscribers: INotificationsListener[]): void {
    for (const subscriber of subscribers) {
      if (this._subscribers.includes(subscriber)) {
        console.warn(`${subscriber} is already subscribed`);
      } else {
        this._subscribers.push(...subscribers);
      }
    }
  }

  public removeSubscribers(subscribers: INotificationsListener[]): void {
    this._subscribers = this._subscribers.filter((sub) => !subscribers.includes(sub));
  }

  public notify(notification: BaseNotification): void {
    for (const subscriber of this._subscribers) {
      subscriber.onNotify(notification);
    }
  }
}
