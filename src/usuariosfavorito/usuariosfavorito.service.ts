import { Injectable } from '@nestjs/common';
import { CreateUsuariosfavoritoDto } from './dto/create-usuariosfavorito.dto';
import { UpdateUsuariosfavoritoDto } from './dto/update-usuariosfavorito.dto';

@Injectable()
export class UsuariosfavoritoService {
  create(createUsuariosfavoritoDto: CreateUsuariosfavoritoDto) {
    return 'This action adds a new usuariosfavorito';
  }

  findAll() {
    return `This action returns all usuariosfavorito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosfavorito`;
  }

  update(id: number, updateUsuariosfavoritoDto: UpdateUsuariosfavoritoDto) {
    return `This action updates a #${id} usuariosfavorito`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosfavorito`;
  }
}
