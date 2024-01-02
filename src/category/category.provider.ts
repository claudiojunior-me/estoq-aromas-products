import { Connection } from 'mongoose';
import { CategorySchema } from './entities/category.schema';

export const categoryProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: async (connection: Connection) => {
      const category = connection.model('Category', CategorySchema);
      return category;
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
