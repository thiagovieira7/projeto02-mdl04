import { Test, TestingModule } from '@nestjs/testing';
import { SesguindoController } from './sesguindo.controller';
import { SesguindoService } from './sesguindo.service';

describe('SesguindoController', () => {
  let controller: SesguindoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SesguindoController],
      providers: [SesguindoService],
    }).compile();

    controller = module.get<SesguindoController>(SesguindoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
