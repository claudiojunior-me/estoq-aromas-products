import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { brandsProviders } from './brands.provider';
import { DatabaseModule } from 'src/shared/database/database.module';
import { BrandsController } from './brands.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BrandsController],
  providers: [BrandsService, ...brandsProviders],
})
export class BrandsModule {}
