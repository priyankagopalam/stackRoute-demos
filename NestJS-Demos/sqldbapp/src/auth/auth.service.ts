import { Injectable } from '@nestjs/common';
import { loginuserDto } from 'src/user/dto/loginuser.dto';
import { User } from 'src/user/models/user.model';
import * as bcrypt from "bcryptjs";
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User) private readonly userModel: typeof User,
        private readonly jwtService: JwtService) { }


    async loginUser(loginUser: loginuserDto): Promise<{ accessToken: string } | null> {
        const user: any = await this.userModel.findOne({
            where: { email: loginUser.email }
        });

        if (user != null) {
            if (bcrypt.compareSync(loginUser.password, user.dataValues.password)) {
                const token = this.jwtService.sign({ user: user.dataValues, sub: user.dataValues._id });
                return { accessToken: token };
            } else {
                return null;
            }
        }
        return null;
    }
}
