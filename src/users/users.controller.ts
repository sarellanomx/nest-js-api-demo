import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Da de alta a un usuario dentro de la BD' })
  @ApiResponse({
    status: 201,
    description: 'El usuario se ha creado exitosamente',
    isArray: true,
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
