import { Controller, Get } from '@nestjs/common';

import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  get(): Promise<string> {
    return this.usersService.get();
  }
}
