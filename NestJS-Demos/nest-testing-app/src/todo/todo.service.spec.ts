import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { getModelToken } from "@nestjs/mongoose";
import { Todo } from './schema/todo.schema';

describe('TodoService', () => {
  let service: TodoService;

  const mockTodo = {
    _id: '1',
    description: 'Test Todo',
    isCompleted: false
  }

  // Step 1. Create an instance mock that represnts 'new this.todoModel(data)'
  const mockSave = jest.fn().mockResolvedValue(mockTodo);
  const mockTodoModelInstance = { save: mockSave };

  // Step 2. Create a factory function that mimics the 'new todoModel(data)'
  const mockTodoModel: any = jest.fn().mockImplementation(() => mockTodoModelInstance);

  // Step 3. Add static methods to the mockTodoModel
  mockTodoModel.find = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue([mockTodo])
  });

  mockTodoModel.findById = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockTodo)
  });

  mockTodoModel.findByIdAndUpdate = jest.fn().mockImplementation((_id, update) => ({
    exec: jest.fn().mockResolvedValue({ ...mockTodo, ...update })
  }));

  mockTodoModel.findByIdAndDelete = jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockTodo)
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService, {
        provide: getModelToken(Todo.name),
        useValue: mockTodoModel
      }],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('Should return all todos', async () => {
    const todos = await service.findAll();
    expect(todos).toEqual([mockTodo]);
  });

  it('Should return one todo by ID', async()=>{
    const todo = await service.findById('1');
    expect(todo).toEqual(mockTodo);
  });


});
