import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosfavoritoService } from './usuariosfavorito.service';

describe('UsuariosfavoritoService', () => {
  let service: UsuariosfavoritoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosfavoritoService],
    }).compile();

    service = module.get<UsuariosfavoritoService>(UsuariosfavoritoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
