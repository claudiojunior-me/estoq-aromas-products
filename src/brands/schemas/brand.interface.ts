import { IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Brand {
  @IsEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  description: string;

  @IsOptional()
  contact: string;

  @IsEmpty()
  active: boolean;

  @IsEmpty()
  dtCreated: Date;

  @IsEmpty()
  dtUpdated: Date;
}
