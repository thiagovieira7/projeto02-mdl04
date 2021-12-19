import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { Seguidores } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class SeguidoresService {
  constructor(private prisma: PrismaService) { }
  
  async create(createSeguidoresDto: CreateSeguidoresDto): Promise<Seguidores>{
    return await this.prisma.seguidores.create({
      data: { ...createSeguidoresDto }
    }

  async findAll(): Promise < Seguidores[] > {
      return await this.prisma.seguidores.findMany();
    } 
    


  async findOne(id: number): Promise < Seguidores > {
      return await this.prisma.seguidores.findUnique({ where: { id } });
    }

  async update(id: number, updateSeguidoresDto: UpdateSeguidoresDto): Promise < Seguidores > {
      return await this.prisma.seguidores.update({ where: { id } }, updateSeguidoreDtodata: { ...updateSeguidoresDto },
        where: { id },
  });
  }

  remove(id: number) {
    return `This action removes a #${id} seguidore`;
  }
}
