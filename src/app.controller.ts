import { Controller, Request, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/guards/local-auth.guard';

import { User } from './users/users.service';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<User> {
    return req.user;
  }
}
