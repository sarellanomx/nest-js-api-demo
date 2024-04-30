import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('NestJS TCK POC API')
    .setDescription('Esta es una api de prueba de NestJS')
    .setVersion('1.0')
    .setBasePath('api/v1')
    .setLicense('Apache 2.0 License', 'https://swagger.io/license/')
    .addTag('NestJSPOC')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
