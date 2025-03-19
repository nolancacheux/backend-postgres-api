import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);  //  Debug
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
