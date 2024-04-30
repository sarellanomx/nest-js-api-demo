import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  @ApiProperty()
  name: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
