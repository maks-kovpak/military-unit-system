import { Subdivision } from '../entities/Subdivision.ts';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  subdivision: Subdivision;
}
