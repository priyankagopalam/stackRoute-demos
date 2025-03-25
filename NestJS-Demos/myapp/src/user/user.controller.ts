import { Body, Controller, Get, Post, Query, UseFilters, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { PaginationQueryDto } from './dto/PaginationQuery.dto';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter';

@Controller('user')
@UseFilters(HttpExceptionFilter)
export class UserController {

    constructor(private readonly userService: UserService) { }
    @Get()
    getAll(): UserDto[] {
        return this.userService.getAll();
    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }

    @Get('filter')
    getUsers(@Query(new ValidationPipe({ transform: true })) query: PaginationQueryDto) {
        return {
            page: query.page,
            limit: query.limit
        }
    }
}
