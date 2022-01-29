import { Connection } from 'typeorm';

import { User, USER_REPOSITORY } from './entities/user.entity';
import { DATABASE_CONNECTION } from 'src/database/database.providers';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  },
];
