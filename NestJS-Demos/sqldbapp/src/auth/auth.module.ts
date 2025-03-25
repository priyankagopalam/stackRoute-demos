import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.stragtegy';

@Module({
  imports: [SequelizeModule.forFeature([User]), JwtModule.register({
    secret: 'thisismysecretforjwttoken',
    signOptions: { expiresIn: '1h' }
  })],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy]
})
export class AuthModule { }
