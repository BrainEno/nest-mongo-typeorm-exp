import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(registerUserDto);
  }
}
