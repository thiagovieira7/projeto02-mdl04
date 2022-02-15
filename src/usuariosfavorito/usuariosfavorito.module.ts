import { Module } from '@nestjs/common';
import { UsuariosfavoritoService } from './usuariosfavorito.service';
import { UsuariosfavoritoController } from './usuariosfavorito.controller';

@Module({
  controllers: [UsuariosfavoritoController],
  providers: [UsuariosfavoritoService],
})
export class UsuariosfavoritoModule {}
