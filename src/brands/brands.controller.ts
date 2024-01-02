import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './schemas/brand.interface';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get()
  async findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.brandsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createBrandDto: Brand) {
    return this.brandsService.create(createBrandDto);
  }

  // url: http://localhost:3000/brands/5f9b9b9b9b9b9b9b9b9b9b9b
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.brandsService.delete(id);
  }
}
