import { Schema } from 'mongoose';

export const PostShema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, require: true },
  body: { type: String, require: true },
  create: { type: Date, default: Date.now },
});
