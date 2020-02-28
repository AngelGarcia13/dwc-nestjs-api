import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('DWC Profiles API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('profiles')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(config.get<string>('PORT'));
}
bootstrap();
