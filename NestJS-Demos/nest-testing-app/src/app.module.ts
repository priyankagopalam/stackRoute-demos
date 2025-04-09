import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

dotenv.config();

@Module({
  imports: [TodoModule, MongooseModule.forRoot(process.env.MONGO_URI as string)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
