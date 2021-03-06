import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesModule } from './roles/roles.module';
import { RolesGuard } from './roles/roles.guard';
import { DatabaseModule } from './database/database.module';
import configuration from './config/configuration';
import configurationDB from './config/configuration-db';
import configurationAuth from './config/configuration-auth';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RolesModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configuration, configurationDB, configurationAuth],
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
