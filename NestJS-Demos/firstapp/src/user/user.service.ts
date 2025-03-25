import { Injectable } from '@nestjs/common';
import { User } from './model/user';

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "John",
            email: "John@gmail.com",
            age: 25
        },
        {
            id: 2,
            name: "James",
            email: "James@gmail.com",
            age: 30
        }
    ]

    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | null {
        return this.users.find(user => user.id === id) ?? null;
    }

    addUser(user: User): User {
        this.users.push(user);
        return user;
    }

    deleteUser(id: number): User | null {
        let i = this.users.findIndex(x => x.id === id);
        this.users.splice(i, 1);
        return this.users.find(x => x.id === id) ?? null;
    }
}
