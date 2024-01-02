import {
  IsBoolean,
  IsEmpty,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class Product {
  @IsEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  shortDescription: string;

  @IsNotEmpty()
  @IsMongoId()
  brand: string;

  @IsNotEmpty()
  @IsMongoId()
  category: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsEmpty()
  dtCreated: Date;

  @IsEmpty()
  dtUpdated: Date;
}
