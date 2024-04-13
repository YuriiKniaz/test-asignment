import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export type Todo = {
  id: number;
  todo: string;
  status: 'Pending' | 'In Progress' | 'Done';
};

export const getTodos = async () => {
  const response = await instance.get<Todo[]>("/todos");
  return response.data;
};

export const getOneTodo = async (id: number) => {
  const response = await instance.get<Todo>(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo: Todo) => {
  const response = await instance.post<Todo>(`/todos`, todo);
  return response.data;
};

export const updateStatus = async (id: number, status: 'Pending' | 'In Progress' | 'Done')=>{
    const response = await instance.put<Todo>(`/todos/${id}`, {status});
    return response.data;
}

export const deleteTodo = async (id: number) => {
  const response = await instance.delete<Todo>(`/todos/${id}`);
  return response.data;
};
