import { createStore } from 'redux';
import todos from './reducers/Todos';
import State from './states';

/**
 * 初期State
 */
const initialState: State = {
  todoList: [],
};

/**
 * storeを返す
 */
const configureStore = () => {
  const store = createStore(todos, initialState);

  return store;
};

export default configureStore;
