import React, { useState } from "react";
import { createTodo, Todo } from "../../service/api/api";
import { Form } from "./TodoField.styled";

const TodoField = () => {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newTodo: Todo = {
        id: 0,
        todo: todo,
        status: "Pending",
      };

      if (!todo || todo.length < 3) {
        alert("Type at least 3 charachters");
        return;
      }

      await createTodo(newTodo);

      setTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Todos</h1>
        <div>
          <input
            type="text"
            value={todo}
            placeholder="Add todo task"
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </div>
      </Form>
    </>
  );
};

export default TodoField;
