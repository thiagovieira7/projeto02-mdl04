/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateUsuarioDto {
  email: string;

  senha: string;

  nome: string;

  imagem: string;

  bio: string;

  nascimento: string;

  seguidores: number;

  seguindo: number;

  tweets: number;
}
