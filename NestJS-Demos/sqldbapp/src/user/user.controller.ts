import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllUsers() {
        return await this.userService.getAllUser();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.userService.getUserById(id);
    }

    @Post()
    async createUser(@Body() user: UserDto) {
        return await this.userService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: UserDto) {
        return await this.userService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.userService.deleteUser(id);
    }
}
