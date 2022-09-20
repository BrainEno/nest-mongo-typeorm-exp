import { Module, CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'nest-backend',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
