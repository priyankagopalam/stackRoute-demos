import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Post } from './post.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'niit1234',
    database: 'userpostdb',
    models: [User, Post],
    autoLoadModels: true,
    synchronize: true
  }),
  SequelizeModule.forFeature([User, Post])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
