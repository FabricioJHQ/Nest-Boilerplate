import { Document } from 'mongoose';

export interface IPost extends Document {
  readonly index: number;
  readonly title: string;
  readonly description: string;
  readonly create: Date;
}
