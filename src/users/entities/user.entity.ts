import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

import { Role } from 'src/roles/role.enum';
import { ID } from 'src/types';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: ID;

  @Column({ length: 500 })
  username: string;

  @Column('text')
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  roles?: Role[];
}
