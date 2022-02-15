import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosfavoritoService } from './usuariosfavorito.service';
import { CreateUsuariosfavoritoDto } from './dto/create-usuariosfavorito.dto';
import { UpdateUsuariosfavoritoDto } from './dto/update-usuariosfavorito.dto';

@Controller('usuariosfavorito')
export class UsuariosfavoritoController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly usuariosfavoritoService: UsuariosfavoritoService) {}

  @Post()
  create(@Body() createUsuariosfavoritoDto: CreateUsuariosfavoritoDto) {
    return this.usuariosfavoritoService.create(createUsuariosfavoritoDto);
  }

  @Get()
  findAll() {
    return this.usuariosfavoritoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosfavoritoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosfavoritoDto: UpdateUsuariosfavoritoDto) {
    return this.usuariosfavoritoService.update(+id, updateUsuariosfavoritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosfavoritoService.remove(+id);
  }
}
