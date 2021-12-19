import { NestFactory } from '@nestjs/core';
import { UsuarioModule } from './app/usuario/usuario.module';

async function bootstrap() {
  const app = await NestFactory.create(UsuarioModule);
  await app.listen(3000);
}
bootstrap();
