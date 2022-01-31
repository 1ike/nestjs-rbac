import { createConnection, ConnectionOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { DatabaseConfig } from 'src/config/configuration-db';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dbConfig = configService.get<DatabaseConfig>('database');

      return createConnection({
        ...dbConfig,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      } as ConnectionOptions);
    },
  },
];
