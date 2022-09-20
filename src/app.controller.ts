import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { FileDto } from './file.dto';
import { LoginUserDto } from './users/dto/login-user.dto';

@Controller()
export class AppController {
  usersService: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  login(@Body() loginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    return this.usersService.login(loginUserDto);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(@Body() body: FileDto, @UploadedFile() file: Express.Multer.File) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
