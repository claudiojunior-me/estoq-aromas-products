import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Brand } from './schemas/brand.interface';

@Injectable()
export class BrandsService {
  constructor(
    @Inject('BRAND_MODEL')
    private brandModel: Model<Brand>,
  ) {}

  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async findOne(id: string): Promise<Brand> {
    return this.brandModel.findById(id);
  }

  async create(createBrandDto: Brand): Promise<Brand> {
    const createdBrand = new this.brandModel(createBrandDto);
    return createdBrand.save();
  }

  async delete(id: string): Promise<boolean> {
    const deleteFun = await this.brandModel.deleteOne({ _id: id });
    return deleteFun.deletedCount === 1;
  }
}
