import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schema/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async findById(id: string): Promise<Todo> {
        const todo = await this.todoModel.findById(id).exec();
        if (!todo)
            throw new NotFoundException('Todo not found');
        return todo;
    }

    async create(data: Todo): Promise<Todo> {
        const newTodo = new this.todoModel(data);
        return await newTodo.save();
    }

    async update(id: string, data: Todo): Promise<Todo> {
        const todo = await this.todoModel.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!todo)
            throw new NotFoundException('Todo not found');
        return todo;
    }

    async delete(id: string): Promise<Todo> {
        const todo = await this.todoModel.findByIdAndDelete(id).exec();
        if (!todo)
            throw new NotFoundException('Todo not found');
        return todo;
    }
}
