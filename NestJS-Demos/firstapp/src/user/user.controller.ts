import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }   

    @Get('/email')
    showEmail() {
        return "Hello John@gmail.com";
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.userService.getById(parseInt(id));
    }

    @Post()
    addUser(@Body() user: User) {
        return this.userService.addUser(user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(parseInt(id));
    }

}
