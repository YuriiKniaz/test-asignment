import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepopsitory: Repository<Todo>,
  ) {}

  async findAllTodos(): Promise<Todo[]> {
    return await this.todoRepopsitory.find();
  }

  async findOneTodo(id: number): Promise<Todo> {
    return await this.todoRepopsitory.findOne({ where: { id } });
  }

  async createTodo(todo: Todo): Promise<Todo> {
    const newTodo = this.todoRepopsitory.create(todo);

    return await this.todoRepopsitory.save(newTodo);
  }

  async updateStatus(
    id: number,
    status: 'Pending' | 'In Progress' | 'Done',
  ): Promise<Todo> {
    const statusUpdate = await this.todoRepopsitory.findOne({ where: { id } });
    if (!statusUpdate) {
      throw new Error('Not found');
    }

    statusUpdate.status = status;
    return await this.todoRepopsitory.save(statusUpdate);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepopsitory.delete(id);
  }
}
