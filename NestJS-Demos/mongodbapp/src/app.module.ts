import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import Redis from 'ioredis';


// loading environment variables
dotenv.config();

const redisProvider = {
  provide: 'REDIS_CLIENT',
  useFactory: () => {
    const client = new Redis({
      host: 'localhost',
      port: 6379
    });

    client.on('connect', () => console.log('Redis connected'));
    client.on('error', (err) => console.log(err));

    return client;
  }
}

@Global()
@Module({
  imports: [ProductModule,
    MongooseModule.forRoot(process.env.MONGO_URI as string),
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
  providers: [AppService, redisProvider, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
  exports: ['REDIS_CLIENT']
})
export class AppModule { }
