import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosfavoritoController } from './usuariosfavorito.controller';
import { UsuariosfavoritoService } from './usuariosfavorito.service';

describe('UsuariosfavoritoController', () => {
  let controller: UsuariosfavoritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosfavoritoController],
      providers: [UsuariosfavoritoService],
    }).compile();

    controller = module.get<UsuariosfavoritoController>(
      UsuariosfavoritoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
