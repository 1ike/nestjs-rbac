import { registerAs } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';

type DatabaseType = ConnectionOptions['type'];

export interface DatabaseConfig {
  type: DatabaseType;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

export default registerAs(
  'database',
  (): DatabaseConfig => ({
    type: process.env.DATABASE_TYPE as DatabaseType,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  }),
);
