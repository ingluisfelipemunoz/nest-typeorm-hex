import { Module } from '@nestjs/common';
import { UserModule } from './lib/User/infrastructure/nestjs/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
