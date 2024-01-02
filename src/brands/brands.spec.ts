import { Test, TestingModule } from '@nestjs/testing';
import { Brands } from './brands.provider';

describe('Brands', () => {
  let provider: Brands;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Brands],
    }).compile();

    provider = module.get<Brands>(Brands);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
