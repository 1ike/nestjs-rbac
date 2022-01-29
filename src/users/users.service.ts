import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/roles/role.enum';
import { User, USER_REPOSITORY } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

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
    const password = await bcrypt.hash(createUserDto.password, 10);

    return this.userRepository.save({
      ...createUserDto,
      password,
    });
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async findByUsernameWithPassword(
    username: string,
  ): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
