import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesguindoService } from './sesguindo.service';
import { CreateSesguindoDto } from './dto/create-sesguindo.dto';
import { UpdateSesguindoDto } from './dto/update-sesguindo.dto';

@Controller('sesguindo')
export class SesguindoController {
  constructor(private readonly sesguindoService: SesguindoService) {}

  @Post()
  create(@Body() createSesguindoDto: CreateSesguindoDto) {
    return this.sesguindoService.create(createSesguindoDto);
  }

  @Get()
  findAll() {
    return this.sesguindoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesguindoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSesguindoDto: UpdateSesguindoDto) {
    return this.sesguindoService.update(+id, updateSesguindoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesguindoService.remove(+id);
  }
}
