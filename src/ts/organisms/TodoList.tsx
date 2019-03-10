import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { default as TodoListComponent } from '../molecules/Todo';
import States from '../states';
import { TodoList } from '../states/TodoState';
import { toggleTodo, TodoAction } from '../actions';

interface TodoListProps {
  todos: TodoList;
  onTodoClick: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return <TodoListComponent {...props} />;
};

interface StateFromProps {
  todos: TodoList;
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
}

function mapStateToProps(state: States): StateFromProps {
  return {
    todos: state.todoList
  };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): DispatchFromProps {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
