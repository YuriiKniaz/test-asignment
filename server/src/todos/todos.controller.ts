import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  async statusUpdate(
    @Param('id') id: number,
    @Body('status') status: 'Pending' | 'In Progress' | 'Done',
  ): Promise<Todo> {
    return await this.todoService.updateStatus(id, status);
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
