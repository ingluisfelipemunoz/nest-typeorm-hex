/* eslint-disable @typescript-eslint/require-await */
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor() {}

  @Get()
  async findAll() {
    return [];
  }
}
