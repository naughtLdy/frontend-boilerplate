import React from 'react';
import { default as TodoListComponent } from '../atoms/TodoList';
import { default as TodoComponent } from '../atoms/Todo';
import { TodoList } from '../states/TodoState';

interface TodoListProps {
  todos: TodoList;
  onTodoClick: (id: number) => void;
}

const Todo = (props: TodoListProps) => {
  return (
    <TodoListComponent>
      {props.todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          onClick={() => props.onTodoClick(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </TodoComponent>
      ))}
    </TodoListComponent>
  );
};

export default Todo;
