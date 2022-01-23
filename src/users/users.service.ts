import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '$2b$10$z5N11MR3Y61D8OxVA5ag3.jNDvsxBAC7T.UFLbk.LDkvVKcZI3WPG', // 'changeme'
    },
    {
      userId: 2,
      username: 'maria',
      password: '$2b$10$MiMcq5Yr2Bf1n/TTCi8Lve0z664WmjmlVIeIuYl8VCe7zqsPRISIa', // 'guess'
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
