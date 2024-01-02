import * as mongoose from 'mongoose';

export const BrandSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  contact: String,
  active: { type: Boolean, default: true },
  dtCreated: { type: Date, default: Date.now },
  dtUpdated: { type: Date, default: Date.now },
});
