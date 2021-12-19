import { Test, TestingModule } from '@nestjs/testing';
import { SesguindoService } from './sesguindo.service';

describe('SesguindoService', () => {
  let service: SesguindoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesguindoService],
    }).compile();

    service = module.get<SesguindoService>(SesguindoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
