import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesModule } from './roles/roles.module';
import { RolesGuard } from './roles/roles.guard';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, AuthModule, RolesModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
