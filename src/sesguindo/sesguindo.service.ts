import { Injectable } from '@nestjs/common';
import { CreateSesguindoDto } from './dto/create-sesguindo.dto';
import { UpdateSesguindoDto } from './dto/update-sesguindo.dto';

@Injectable()
export class SesguindoService {
  create(createSesguindoDto: CreateSesguindoDto) {
    return 'This action adds a new sesguindo';
  }

  findAll() {
    return `This action returns all sesguindo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesguindo`;
  }

  update(id: number, updateSesguindoDto: UpdateSesguindoDto) {
    return `This action updates a #${id} sesguindo`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesguindo`;
  }
}
