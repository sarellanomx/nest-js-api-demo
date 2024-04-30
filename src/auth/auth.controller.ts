import { ApiTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Post('/login')
  async getHello(): Promise<string> {
    return 'Success !';
  }
}
