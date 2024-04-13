import React, { useEffect, useState } from "react";
import {
  getTodos,
  deleteTodo,
  updateStatus,
  Todo,
} from "../../service/api/api";
import { TodosList } from "./TodoList.styled";


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getAllTodo = async () => {
      try {
        const allTodos = await getTodos();
        setTodos(allTodos);
      } catch (error) {
        console.error("Error getting all todos:", error);
      }
    };
    getAllTodo();
    console.log(todos)
  }, [todos]);

  const handleUpdate = async (
    id: number,
    newStatus: "Pending" | "In Progress" | "Done"
  ) => {
    try {
      await updateStatus(id, newStatus);
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      const updateTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updateTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
        {todos.length !== 0 ? <TodosList>
        {todos.map((todo) => (
          <li key={todo.id} style={{
            backgroundColor: todo.status === 'Done' ? '#5bb85e' : '#2a9df4' && todo.status === 'In Progress' ? '#e6b400' : '#2a9df4'
        }}>
            <span >{todo.todo}</span>  
            <div>     
            
            <select
              value={todo.status}
              onChange={(e) =>
                handleUpdate(
                  todo.id,
                  e.target.value as "Pending" | "In Progress" | "Done"
                )
              }
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </TodosList> : <p>Todos are empty</p>}
      
    </>
  );
};

export default TodoList;
