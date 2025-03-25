import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { loginuserDto } from 'src/user/dto/loginuser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login')
    async loginUser(@Body() user: loginuserDto){
        const res = await this.authService.loginUser(user);
        if(res == null){
            throw new UnauthorizedException('Invalid Credentials');
        }
        return res;
    }
}
