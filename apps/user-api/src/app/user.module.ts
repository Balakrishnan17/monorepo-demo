import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersService } from './user.service';

import { UsersController } from './user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    })
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
