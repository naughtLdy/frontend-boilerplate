import State from '../states';
import { TodoActionType, TodoAction } from '../actions';

function todos(state: State, action: TodoAction): State {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case TodoActionType.TOGGLE_TODO:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id == action.id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };

    default:
      return state;
  }
}

export default todos;
