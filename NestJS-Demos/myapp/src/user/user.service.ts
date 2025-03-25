import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    private readonly users: UserDto[] = [];

    getAll(): UserDto[] {
        return this.users;
    }

    createUser(user: UserDto): UserDto {
        this.users.push(user);
        return user;
    }
}
