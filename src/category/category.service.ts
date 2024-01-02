import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_MODEL') private categoryModel: Model<CreateCategoryDto>,
  ) {}

  async findAll(): Promise<CreateCategoryDto[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<CreateCategoryDto> {
    return this.categoryModel.findById(id);
  }

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CreateCategoryDto> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async delete(id: string): Promise<boolean> {
    const deleteFun = await this.categoryModel.deleteOne({ _id: id });
    return deleteFun.deletedCount === 1;
  }
}
