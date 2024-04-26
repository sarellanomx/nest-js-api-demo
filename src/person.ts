import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

const suma = (a: number, b: number) => a + b;

@Injectable()
export class Person {
  constructor(private readonly configService: ConfigService) {}
  getSummary(valor: number): string {
    const host = this.configService.get<string>('host');
    console.log('Este es el host: %s', host);
    return `${host}, ${valor}, ${suma(valor, valor)}`;
  }
}
