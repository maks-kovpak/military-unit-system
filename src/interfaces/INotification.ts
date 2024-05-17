import { NotificationType } from '../lib/enums.ts';

export interface INotification {
  notificationType: NotificationType;
  text: string;
}
