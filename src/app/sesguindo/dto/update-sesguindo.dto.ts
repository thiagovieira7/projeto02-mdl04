import { PartialType } from '@nestjs/mapped-types';
import { CreateSesguindoDto } from './create-sesguindo.dto';

export class UpdateSesguindoDto extends PartialType(CreateSesguindoDto) {}
