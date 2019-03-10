import * as React from 'react';
import Todo from '../templates/Todo';

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return <Todo />;
  }
}
