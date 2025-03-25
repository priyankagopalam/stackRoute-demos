import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

// loading environment variables
dotenv.config();

@Module({
  imports: [ProductModule, MongooseModule.forRoot(process.env.MONGO_URI as string),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 30000,
          limit: 3
        }
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule { }
