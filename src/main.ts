import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'Content-Type, Authorization',
  //   );
  //   next();
  // });
  app.enableCors({
    origin: '*',
  });
  // app.use(cors()).use(express.json());
  await app.listen(3000);
}

bootstrap();
