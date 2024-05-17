import { BaseNotification } from '../entities/Notification.ts';

export interface INotificationsListener {
  onNotify(notification: BaseNotification): void;
}
