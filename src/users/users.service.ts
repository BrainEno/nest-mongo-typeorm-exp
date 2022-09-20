import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    readonly usersRepository: Repository<User>,
  ) {}

  register(createUserDto: RegisterUserDto): Promise<User> {
    const user = new User();
    const { email, username, password } = createUserDto;
    user.username = username;
    user.email = email;
    user.password = password;
    user.isActive = true;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
