import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { Module } from '@nestjs/common';
import { Person } from './app/app.person';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.APP_HOST,
      port: Number(process.env.APP_PORT),
      password: process.env.APP_PASSWORD,
      username: process.env.APP_USER,
      entities: [User],
      database: process.env.APP_DB,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService, Person],
})
export class AppModule {}
