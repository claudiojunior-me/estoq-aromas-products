import { Connection } from 'mongoose';
import { BrandSchema } from './schemas/brand.schema';

export const brandsProviders = [
  {
    provide: 'BRAND_MODEL',
    useFactory: async (connection: Connection) => {
      const brands = connection.model('Brand', BrandSchema);
      return brands;
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
