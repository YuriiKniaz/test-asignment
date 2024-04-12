import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAllTodos();
  }

  @Post()
  async createOne(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.createTodo(todo);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<void> {
    const todo = await this.todoService.findOneTodo(id);
    if (!todo) {
      throw new Error('Invalid todo ID');
    }
    return this.todoService.deleteTodo(id);
  }
}
