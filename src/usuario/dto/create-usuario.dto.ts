import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;
}
