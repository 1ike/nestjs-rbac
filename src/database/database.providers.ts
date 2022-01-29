import { createConnection } from 'typeorm';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: '192.168.1.26',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
