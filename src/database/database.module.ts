import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from '../models/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),  // 🔹 Convertir en Number
      username: process.env.DATABASE_USER,
      password: String(process.env.DATABASE_PASSWORD),  // 🔹 Convertir en String
      database: process.env.DATABASE_NAME,
      entities: [User],
      synchronize: true,  // 🚨 En prod, mettre `false`
    }),
  ],
})
export class DatabaseModule {}
