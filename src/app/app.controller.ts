import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import {
  Controller,
  Get,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './app.person';

@ApiTags('expediente')
@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService,
    private readonly person: Person,
  ) {}

  @Get('/cat/claves/consultar')
  @ApiOperation({ summary: 'Obtiene una lista de claves desde BD' })
  @ApiResponse({
    status: 200,
    description: 'Se han obtenido las claves exitosamente.',
    isArray: true,
  })
  async getHello(): Promise<string> {
    try {
      const greetingWord = this.configService.get<string>('port');
      return this.appService.getHello() + ' Port: ' + greetingWord;
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    }
  }

  @Get('/expediente/consultar/:valor')
  @ApiOperation({ summary: 'Obtiene una expediente por id' })
  async getSum(@Param('valor') valor: number): Promise<string> {
    return this.person.getSummary(valor);
  }

  @Delete('/expediente/consultar/:valor')
  async deleteSum(@Param('valor') valor: number): Promise<string> {
    return this.person.getSummary(valor);
  }
}
