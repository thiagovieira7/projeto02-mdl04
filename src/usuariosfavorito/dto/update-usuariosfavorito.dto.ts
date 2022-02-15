import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosfavoritoDto } from './create-usuariosfavorito.dto';

export class UpdateUsuariosfavoritoDto extends PartialType(
  CreateUsuariosfavoritoDto,
) {}
