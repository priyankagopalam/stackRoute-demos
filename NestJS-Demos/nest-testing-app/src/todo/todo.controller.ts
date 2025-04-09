import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schema/todo.schema';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Get()
    async findAll() {
        return await this.todoService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.todoService.findById(id);
    }

    @Post()
    async create(@Body() body: Todo){
        return await this.todoService.create(body);
    }

    @Put(':id')
    async update(@Param('id') id: string, data: Todo) {
        return await this.todoService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.todoService.delete(id);
    }

}
