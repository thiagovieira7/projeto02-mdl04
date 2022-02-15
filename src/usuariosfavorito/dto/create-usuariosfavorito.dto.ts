/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUsuariosfavoritoDto {
  tweetid: number;

  usuarioid: number;
}
