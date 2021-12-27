import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DopcumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet form 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder();
  setTitle('World Menu');
  setDescription('REST API');
  setVersion('1.0.0');
  build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/doc', app, document);

  await app.listen(3000);
}

bootstrap();
