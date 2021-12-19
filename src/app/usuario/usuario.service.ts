import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../../prisma/prisma.service';

const listaUser = [];
@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    listaUser.push(createUsuarioDto);
    return 'This action adds a new usuario';
  }

  async createPrisma(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.create({
      data: { ...createUsuarioDto },
    });
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
