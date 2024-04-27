import { ConfigService } from '@nestjs/config';
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './person';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService,
    private readonly person: Person,
  ) {}

  @Get('/hello')
  async getHello(): Promise<string> {
    const greetingWord = this.configService.get<string>('port');
    return this.appService.getHello() + ' Port: ' + greetingWord;
  }

  @Get('/sum/:valor')
  async getSum(@Param('valor') valor: number): Promise<string> {
    return this.person.getSummary(valor);
  }
}
