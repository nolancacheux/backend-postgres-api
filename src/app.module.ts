import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './services/user.module'; 

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule],
})
export class AppModule {}
