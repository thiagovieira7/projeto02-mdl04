import { Module } from '@nestjs/common';
import { SesguindoService } from './sesguindo.service';
import { SesguindoController } from './sesguindo.controller';

@Module({
  controllers: [SesguindoController],
  providers: [SesguindoService]
})
export class SesguindoModule {}
