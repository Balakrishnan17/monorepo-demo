import helmet from 'helmet';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { UsersModule } from './app/user.module';

import { TransformInterceptor } from '@monorepo-demo/common-be';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule, {
    logger: ['error', 'warn', 'log']
  });
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
      whitelist: true
    })
  );

  app.useGlobalInterceptors(new TransformInterceptor());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(helmet());

  const port = configService.get<number>('USER_PORT') || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
