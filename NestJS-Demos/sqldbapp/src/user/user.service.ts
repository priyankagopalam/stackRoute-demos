import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserDto } from './dto/user.dto';
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userModel: typeof User) { }

    createUser(user: UserDto): Promise<User> {
        return this.userModel.create({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: bcrypt.hashSync(user.password),
            city: user.city,
            age: user.age
        });
    }

    getAllUser(): Promise<User[]> {
        return this.userModel.findAll();
    }

    getUserById(id: string): Promise<User | null> {
        return this.userModel.findOne({ where: { _id: id } });
    }

    updateUser(id: string, user: UserDto): Promise<[number, User[]] | null> {
        return this.userModel.update({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            city: user.city,
            age: user.age
        }, { where: { _id: id }, returning: true });
    }

    deleteUser(id: string): Promise<number> {
        return this.userModel.destroy({ where: { _id: id } });
    }

    
}
