import { Injectable } from '@nestjs/common';

import { constants } from '@monorepo-demo/common';

@Injectable()
export class UsersService {
  async get(): Promise<string> {
    return constants.COMPANY_NAME;
  }
}
