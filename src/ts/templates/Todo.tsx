import React from 'react';
import TodoList from '../organisms/TodoList';
import AddTodoButton from '../organisms/AddTodoButton';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <AddTodoButton />
        <TodoList />
      </div>
    );
  }
}
