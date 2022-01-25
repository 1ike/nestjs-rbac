import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/roles/role.enum';
import { User } from './entities/user.entity';
import { UserWithPassword } from './entities/user-with-password.entity';

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

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findByUsernameWithPassword(
    username: string,
  ): Promise<UserWithPassword | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
