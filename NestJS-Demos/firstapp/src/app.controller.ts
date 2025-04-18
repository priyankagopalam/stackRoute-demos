import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  sayHello(): string {
      return `App is saying hello from ${process.env.PORT} server`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
