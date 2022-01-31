import { registerAs } from '@nestjs/config';

export interface AuthConfig {
  JWT_SECRET: string;
  JWT_EXPIRES_IN_SECONDS: number;
}

export default registerAs(
  'auth',
  (): AuthConfig => ({
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN_SECONDS: parseInt(process.env.JWT_EXPIRES_IN_SECONDS, 10),
  }),
);
