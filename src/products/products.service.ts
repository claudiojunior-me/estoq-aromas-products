import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './schemas/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(createProductDto: Product): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  delete(id: string): Promise<boolean> {
    return this.productModel
      .deleteOne({ _id: id })
      .then((res) => res.deletedCount === 1);
  }
}
