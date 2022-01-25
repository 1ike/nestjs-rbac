import { OmitType } from '@nestjs/mapped-types';

import { UserWithPassword } from './user-with-password.entity';

export class User extends OmitType(UserWithPassword, ['password'] as const) {}
