import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  shortDescription: String,
  brand: String,
  category: String,
  active: { type: Boolean, default: true },
  dtCreated: { type: Date, default: Date.now },
  dtUpdated: { type: Date, default: Date.now },
});
