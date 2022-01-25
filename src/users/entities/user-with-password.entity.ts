import { Role } from 'src/roles/role.enum';
import { ID } from 'src/types';

export class UserWithPassword {
  id: ID;
  username: string;
  password: string;
  roles?: Role[];
}
