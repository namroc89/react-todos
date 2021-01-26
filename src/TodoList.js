import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const renderTodos = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} item={todo.item} handleRemove={remove} />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul className="Todos">{renderTodos}</ul>
    </div>
  );
};

export default TodoList;
