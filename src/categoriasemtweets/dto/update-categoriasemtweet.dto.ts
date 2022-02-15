import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriasemtweetDto } from './create-categoriasemtweet.dto';

export class UpdateCategoriasemtweetDto extends PartialType(
  CreateCategoriasemtweetDto,
) {}
