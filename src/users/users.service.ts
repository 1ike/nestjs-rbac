import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/role.enum';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: '$2b$10$z5N11MR3Y61D8OxVA5ag3.jNDvsxBAC7T.UFLbk.LDkvVKcZI3WPG', // 'changeme'
      roles: [Role.Admin],
    },
    {
      id: 2,
      username: 'maria',
      password: '$2b$10$MiMcq5Yr2Bf1n/TTCi8Lve0z664WmjmlVIeIuYl8VCe7zqsPRISIa', // 'guess'
      roles: [Role.User],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findByID(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
